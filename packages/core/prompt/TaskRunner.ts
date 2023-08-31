interface PromptInputTask<T> {
	done: boolean;
	run: Task<T>;
}

export const WIZARD_BACK_OPTION = "Back";

export type PromptInputTaskResult = typeof WIZARD_BACK_OPTION | boolean | void;
export type Task<T> = (runner: TaskRunner<T>, context: T) => Promise<PromptInputTaskResult>;

export class TaskRunner<T> {
	protected taskQueue: (PromptInputTask<T>)[] = [];
	protected additions: (PromptInputTask<T>)[] = [];
	protected currentTask: PromptInputTask<T>;

	public get done(): boolean {
		return !this.taskQueue.filter(x => !x.done).length;
	}

	// tslint:disable:member-ordering
	constructor(protected context: T) {}

	/** Add a task to the queue. Will insert after current if called while running */
	public addTask(task: Task<T>) {
		const taskObj = { done: false, run: task };
		if (this.currentTask) {
			this.additions.push(taskObj);
		} else {
			this.taskQueue.push(taskObj);
		}
	}

	/** clear */
	public clearPending() {
		if (this.currentTask) {
			const index = this.taskQueue.indexOf(this.currentTask);
			this.taskQueue = this.taskQueue.slice(0, index + 1);
		} else {
			this.taskQueue = [];
		}
	}

	/** mark all tasks as incomplete */
	public resetTasks() {
		this.taskQueue.forEach(x => x.done = false);
	}

	/** run */
	public async run() {
		for (let i = 0; i < this.taskQueue.length; i++) {
			const task = this.taskQueue[i];
			if (task.done) { continue; }

			const previousTask = this.taskQueue[i - 1] || task;
			this.currentTask = task;
			const result = await task.run(this, this.context);
			if (this.additions.length) {
				this.taskQueue.splice(i + 1, 0, ...this.additions);
				this.additions = [];
			}
			this.currentTask = null;
			if (result !== true) {
				task.done = false;
				previousTask.done = result === WIZARD_BACK_OPTION ? false : previousTask.done;
				break;
			}
			task.done = result;
		}
	}
}

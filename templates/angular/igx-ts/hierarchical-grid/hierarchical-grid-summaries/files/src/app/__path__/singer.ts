export class Singer {
    get Artist() {
        return this.artist;
    }
    set Artist(val) {
        this.artist = val;
    }
    get HasGrammyAward() {
        return this.hasGrammyAward;
    }
    set HasGrammyAward(val) {
        this.hasGrammyAward = val;
    }
    get Debut() {
        return this.debut;
    }
    set Debut(val) {
        this.debut = val;
    }
    get GrammyNominations() {
        return this.grammyNominations;
    }
    set GrammyNominations(val) {
        this.grammyNominations = val;
    }
    get GrammyAwards() {
        return this.grammyAwards;
    }
    set GrammyAwards(val) {
        this.grammyAwards = val;
    }

    private artist: string;
    private hasGrammyAward: boolean;
    private debut: number;
    private grammyNominations: number;
    private grammyAwards: number;

    constructor() {
        this.artist = '';
        this.hasGrammyAward = false;
        this.debut = 2000;
        this.grammyNominations = 0;
        this.grammyAwards = 0;
    }
}

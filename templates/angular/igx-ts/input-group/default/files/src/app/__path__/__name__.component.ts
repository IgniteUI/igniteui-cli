import { Component, ViewChild } from '@angular/core';
import { IgxComboComponent  } from 'igniteui-angular';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.css']
})

export class $(ClassName)Component{
	public user = {
        dateTime: new Date(),
        email: "",
        fullName: "",
        genres: "",
        phone: ""
    };

    public genres = ["Action", "Adventure", "Comedy", "Crime",
        "Drama", "Historical", "Horror", "Mistery",
        "Musical", "Romance", "Sci-Fi", "Thriller", "Western"];

    @ViewChild("combo1", { read: IgxComboComponent })
    private combo1: IgxComboComponent;

    public onDateSelection(value) {
        this.user.dateTime.setDate((value as Date).getDate());
    }

    public onTimeSelection(event) {
        this.user.dateTime.setTime((event.newValue as Date).getTime());
    }
}

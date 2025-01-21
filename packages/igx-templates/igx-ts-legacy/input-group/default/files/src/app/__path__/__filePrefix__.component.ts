import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Genre {
  type: string;
  movies: string[];
}

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  standalone: false
})
export class <%=ClassName%>Component implements OnInit {
  public genres!: Genre[];
  public user!: FormGroup;
  public minTime = '06:15:30';
  public maxTime = '09:15:30';
  public minDate = new Date();
  public maxDate = new Date(new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate() + 14));

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.genres = [
      { type: 'Action', movies: ['The Matrix', 'Kill Bill: Vol.1', 'The Dark Knight Rises'] },
      { type: 'Adventure', movies: ['Interstellar', 'Inglourious Basterds', 'Inception'] },
      { type: 'Comedy', movies: ['Wild Tales', 'In Bruges', 'Three Billboards Outside Ebbing, Missouri', 'Untouchable', '3 idiots'] },
      { type: 'Crime', movies: ['Training Day', 'Heat', 'American Gangster'] },
      { type: 'Drama', movies: ['Fight Club', 'A Beautiful Mind', 'Good Will Hunting', 'City of God'] },
      { type: 'Biography', movies: ['Amadeus', 'Bohemian Rhapsody'] },
      { type: 'Mystery', movies: ['The Prestige', 'Memento', 'Cloud Atlas'] },
      { type: 'Musical', movies: ['All That Jazz'] },
      { type: 'Romance', movies: ['Love Actually', 'In The Mood for Love'] },
      { type: 'Sci-Fi', movies: ['The Fifth Element'] },
      { type: 'Thriller', movies: ['The Usual Suspects'] },
      { type: 'Western', movies: ['Django Unchained'] }
    ];

    this.user = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      email: ['', Validators.required],
      fullName: ['', Validators.required],
      genres: [''],
      movie: ['', Validators.required],
      phone: ['']
    });
  }

  public onSubmit() {
    console.log(this.user);
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IgxFilterOptions, IgxListItemComponent } from 'igniteui-angular';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class $(ClassName)Component implements OnInit {
  title = '$(name)';
  public searchContact: string;
  public contacts = [
    {
      isFavorite: false,
      name: 'Terrance Orta',
      phone: '770-504-2217',
      photo: 'https://randomuser.me/api/portraits/men/27.jpg'
    },
    {
      isFavorite: true,
      name: 'Richard Mahoney',
      phone: '423-676-2869',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      isFavorite: false,
      name: 'Donna Price',
      phone: '859-496-2817',
      photo: 'https://randomuser.me/api/portraits/women/50.jpg'
    },
    {
      isFavorite: false,
      name: 'Lisa Landers',
      phone: '901-747-3428',
      photo: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      isFavorite: true,
      name: 'Dorothy H. Spencer',
      phone: '573-394-9254',
      photo: 'https://randomuser.me/api/portraits/women/67.jpg'
    }
  ];

  constructor() { }

  ngOnInit() { }

  public toggleFavorite(item: IgxListItemComponent) {
    const contact = this.contacts[item.index - 1];
    contact.isFavorite = !contact.isFavorite;
  }

  get filterContacts() {
    const fo = new IgxFilterOptions();
    fo.key = 'name';
    fo.inputValue = this.searchContact;
    return fo;
  }
}

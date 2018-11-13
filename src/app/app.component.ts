import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  curent_date = new Date();
  posts = [
    {
      title: 'Aniv d\'un ami',
      content: 'Joyeux aniversaire mon ami',
      loveIts: 0,
      created_at: this.curent_date
    },
    {
      title: 'Le jour où je suis né',
      content: 'Joyeux aniversaire à moi',
      loveIts: 0,
      created_at: this.curent_date
    },
    {
      title: 'Le jour où j\'avais su pourquoi j\'étais né',
      content: 'Le jour où j\'ai choisi l\'informatique comme domaine de ma vie',
      loveIts: 0,
      created_at: this.curent_date
    },
    {
      title: 'Ce jour là!',
      content: 'Le jour où j\'ai choisi le code comme petit dej',
      loveIts: 0,
      created_at: this.curent_date
    }
  ];
}

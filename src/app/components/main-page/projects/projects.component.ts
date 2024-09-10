import { Component } from '@angular/core';
import { Project } from 'src/app/schemas/project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {id: 1, title: 'Book Nook', subtitle: 'Book recommendation system', avatar: 'assets/projects/logo1.png',
      techologies: ['Angular', 'Nodejs', 'Express.js', 'Postman', '...'],
      description: 'User gets book recommendations depending on their previous read and popularity of the book. Authorized user gets access to all the features of the app (rating books, saving them and getting personalized book recommendations) while non-authorized user can mainly view book-related data and get list of the most popular books. All personal details are safely encrypted and JWT token is used.',
      new: 'Secure log-in system (JWT token), full-scaled frontend and backend, validation.  ',
      links: {frontEnd: 'https://booknook-e2178.web.app/home', backEnd: '', gitF: 'https://github.com/troyanovskaya/bookApp', gitB: 'https://github.com/troyanovskaya/bookAppBack'},
      picture: 'assets/projects/picture1.jpg', languages: ["English"]},
    {id: 2, title: 'BoomMax', subtitle: ' Stationary business card site', avatar: '',
      techologies: ['Angular'],
      description: 'Business card site for the stationary shop. Created as a bilingual web-site.',
      new: 'First commercial project, language switch option',
      links: {frontEnd: 'https://starpom.com.ua/', backEnd: '', gitF: '', gitB: ''},
      picture: 'assets/projects/picture2.jpg', languages: ['Ukrainian', 'Russian']},

    {id: 3, title: 'Dictionary', subtitle: 'Neologism research support project', avatar: '',
        techologies: ['Angular'],
        description: 'The development of an electronic dictionary “Word usage of Ukrainians as means of sociolinguistic diagnostics of society during the full-scale stage of the Russian-Ukrainian war“ ',
        new: 'First scientific project, excel table as database',
        links: {frontEnd: 'https://troyanovskaya.github.io/dictionary/', backEnd: '', gitF: '', gitB: ''},
        picture: 'assets/projects/picture3.jpg', languages: ['Ukrainian']},
  ];
}

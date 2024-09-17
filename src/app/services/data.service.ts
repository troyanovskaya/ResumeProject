import { Injectable } from '@angular/core';
import { Project } from '../schemas/project';
import { Icon } from '../schemas/icon';
import { Hobby } from '../schemas/hobby';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  projects: Project[] = [
    { title: 'Book Nook', subtitle: 'Book recommendation system', avatar: 'assets/projects/logo1.png',
      techologies: ['Angular', 'Nodejs', 'Express.js', 'Postman', '...'],
      description: 'User gets book recommendations depending on their previous read and popularity of the book. Authorized user gets access to all features of the app (rating books, saving them and getting personalized book recommendations) while non-authorized user can mainly view book-related data and get list of the most popular books. All personal details are safely encrypted and JWT token is used.',
      new: 'Secure log-in system (JWT token), full-scaled frontend and backend, validation.  ',
      links: {frontEnd: 'https://booknook-e2178.web.app/home', backEnd: '', gitF: 'https://github.com/troyanovskaya/bookApp', gitB: 'https://github.com/troyanovskaya/bookAppBack'},
      picture: 'assets/projects/picture1.jpg', languages: ["English"]},
    {title: 'BoomMax', subtitle: ' Stationary business card site', avatar: '',
      techologies: ['Angular'],
      description: 'Business card site for the stationary shop. Created as a bilingual web-site.',
      new: 'First commercial project, language switch option',
      links: {frontEnd: 'https://starpom.com.ua/', backEnd: '', gitF: '', gitB: ''},
      picture: 'assets/projects/picture2.jpg', languages: ['Ukrainian', 'Russian']},

    {title: 'Dictionary', subtitle: 'Neologism research support project', avatar: '',
        techologies: ['Angular'],
        description: 'This web resource is developed is support of the research “Word usage of Ukrainians as means of sociolinguistic diagnostics of society during the full-scale stage of the Russian-Ukrainian war“. Using this online dictionary users will be able to aquire comprehensive knowledge of origin and meanig of specific neologism groups.   ',
        new: 'First scientific project, excel table as database',
        links: {frontEnd: 'https://troyanovskaya.github.io/dictionary/', backEnd: '', gitF: '', gitB: ''},
        picture: 'assets/projects/picture3.jpg', languages: ['Ukrainian']},
  ];
  icons: Icon[] = [{name: 'VS Code', path: 'assets/instruments/vs_code.png', link:'https://code.visualstudio.com/', alias: 'vs_code'},
    {name: 'GitHub', path: 'assets/instruments/github.png', link: 'https://github.com/troyanovskaya', alias: 'github'},
    {name: 'MobgoDB', path: 'assets/instruments/mongodb.png', link: 'https://www.mongodb.com/', alias: 'mongodb'},
    {name: 'Postman', path: 'assets/instruments/postman.png', link: 'https://www.postman.com/', alias: 'postman'},
    {name: 'Firebase', path: 'assets/instruments/firebase.png', link: 'https://firebase.google.com/', alias: 'firebase'},
    {name: 'Render', path: 'assets/instruments/render.png', link: 'https://docs.render.com/', alias: 'render'},
    {name: 'Angular', path: 'assets/instruments/angular.png', link: 'https://angular.dev/', alias: 'angular'},
    {name: 'Material', path: 'assets/instruments/material.png', link: 'https://material.angular.io/', alias: 'material'},
    {name: 'Nodejs', path: 'assets/instruments/nodejs.png', link: 'https://nodejs.org/', alias: 'nodejs'},
    {name: 'Express.js', path: 'assets/instruments/expressjs.png', link: 'https://expressjs.com/', alias: 'expressjs'}
  ]
  hobbies: Hobby[] = [
    {imgs: ['assets/hobbies/violet1.jpg', 'assets/hobbies/violet2.jpg', 'assets/hobbies/violet3.jpg'], title: 'Plant growing',
      description: ['Even though african violets are not the only plants I am currently growing, the are the most numerous ones. Right now I own more the 30 differnt species. However, due to the accident labels detachments I patiently wait for the first flowers to identify their breed.',
        'All but three of them were grown from leaves and right now they are on the stage of starter (can call it teenage plant) and promise to bloom soon enough.',
        'Besides violets I have two Venus flytraps and one pot of lithops. All together they are threatening not only to take over my own room, but the living room also.'
      ]},
    {imgs: ['assets/hobbies/book1.jpg', 'assets/hobbies/book2.jpg', 'assets/hobbies/book3.jpg'], title: 'Reading',
      description: ['I strongly believe that bying books, owning books and reading them are three differend types of pleasure. Pleasure, I could never deny myself.',
        'Since childhood I was obsessed with reading fantasy, but getting older I understood that different genres can be captivating. Nonetheless, fantasy books are predominant inhabitants of my book shelves. '
    ]}
  ]
  findMe: Icon[] = [
    {name: 'Linkedin',
      path: 'assets/linkedin.png',
      link: 'https://www.linkedin.com/in/anastasiia-troianovska-bb4919234/',
      alias: 'linkedin'},
    {name: 'GitHub',
      path: 'assets/instruments/github.png',
      link: 'https://github.com/troyanovskaya',
      alias: 'github'}

  ]
  gmail:Icon = {name: 'Gmail',
    path: 'assets/instruments/gmail.png',
    link: 'place.with.secret@gmail.com',
    alias: 'gmail'}
  getProjects(){
    return this.projects;
  }
  getIcons(){
    return this.icons;
  }
  getHobbies(){
    return this.hobbies;
  }
  getFindMe(){
    return this.findMe;
  }
  getGmail(){
    return this.gmail;
  }
}


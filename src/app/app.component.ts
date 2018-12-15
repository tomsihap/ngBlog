import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngBlog';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque eu risus sit amet consectetur. Pellentesque eget ligula diam. Ut semper vel ante vitae lacinia. Vestibulum imperdiet purus in molestie scelerisque. Mauris eleifend erat eu euismod suscipit. Vivamus in urna convallis, congue massa vitae, viverra felis.',
      loveits: 0,
      created_at: new Date()
    },
    {
      title: 'Mon second article...',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum porta lobortis. Donec et eros sapien. Pellentesque accumsan tempor pharetra. Duis non metus nec orci commodo venenatis. Nunc maximus, libero et imperdiet sodales, dui neque porta metus, vel egestas lectus lectus id turpis.',
      loveits: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un troisième message !',
      content: 'Integer sagittis leo volutpat, condimentum massa sit amet, porta dolor. Donec dignissim interdum leo, in vestibulum eros. Morbi mattis vestibulum sapien, vel egestas mauris pharetra ut. Etiam tristique ligula sit amet enim fermentum, vitae bibendum turpis sollicitudin. Quisque ut molestie sapien. Praesent a elit sed nulla euismod suscipit.',
      loveits: 0,
      created_at: new Date()
    },
  ];
}

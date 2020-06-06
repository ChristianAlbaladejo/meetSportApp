import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'add-publication',
    loadChildren: () => import('./add-publication/add-publication.module').then( m => m.AddPublicationPageModule)
  },
  {
    path: 'publication',
    loadChildren: () => import('./publication/publication.module').then( m => m.PublicationPageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'follow-following',
    loadChildren: () => import('./follow-following/follow-following.module').then( m => m.FollowFollowingPageModule)
  },
  {
    path: 'other-user',
    loadChildren: () => import('./other-user/other-user.module').then( m => m.OtherUserPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'received',
    loadChildren: () => import('./received/received.module').then( m => m.ReceivedPageModule)
  },
  {
    path: 'sended',
    loadChildren: () => import('./sended/sended.module').then( m => m.SendedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

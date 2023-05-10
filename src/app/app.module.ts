import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorksComponent } from './components/works/works.component';
import { EducationComponent } from './components/education/education.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditingFormComponent } from './components/editing-form/editing-form.component';
import { BtnEditarComponent} from './components/btn-editar/btn-editar.component';
import { BtnEliminarComponent } from './components/btn-eliminar/btn-eliminar.component';
import { BtnAgregarComponent } from './components/btn-agregar/btn-agregar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { FormAboutMeComponent } from './components/form-about-me/form-about-me.component';
import { MenuExpLabComponent } from './components/menu-exp-lab/menu-exp-lab.component';
import { FormWorkComponent } from './components/form-work/form-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    WorksComponent,
    EducationComponent,
    SkillComponent,
    ProjectComponent,
    FooterComponent,
    EditingFormComponent,
    BtnEditarComponent,
    BtnEliminarComponent,
    BtnAgregarComponent,
    FormHeaderComponent,
    FormAboutMeComponent,
    MenuExpLabComponent,
    FormWorkComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

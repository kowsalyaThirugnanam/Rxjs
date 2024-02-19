import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ ObservableComponent} from '../app/Rxjs/observable/observable.component';
import {CreationOperatorComponent} from '../app/Rxjs/observable/Operators/creation-operator/creation-operator.component';
import { PromisesComponent} from '../app/Rxjs/promises/promises.component';
import {TechnicalQuestionsComponent} from '../app/InterviewQuestions/technical-questions/technical-questions.component';
import { CustomObservableComponent}from '../app/Rxjs/observable/custom-observable/custom-observable.component';
import {TransformationOperatorComponent} from '../app/Rxjs/observable/Operators/transformation-operator/transformation-operator.component';
import { FilteringOperatorComponent} from '../app/Rxjs/observable/Operators/filtering-operator/filtering-operator.component';
import { UtilityOperatorComponent}from '../app/Rxjs/observable/Operators/utility-operator/utility-operator.component';
import { ErrorHandlingOperatorComponent} from '../app/Rxjs/observable/Operators/error-handling-operator/error-handling-operator.component';
import {SubjectComponent}from '../app/Rxjs/observable/Subject/subject/subject.component';
import { CombinationOperatorComponent} from '../app/Rxjs/observable/Operators/combination-operator/combination-operator.component';
import {InterceptorExampleComponent} from '../app/interceptor-example/interceptor-example.component';

const routes: Routes = [
  {path:'',redirectTo:'Observable',pathMatch:'full'},
  {path:'Observable',component:ObservableComponent},
  {path:'CreationOperator',component:CreationOperatorComponent},
  {path:'TransformationOperator',component:TransformationOperatorComponent},
  {path:'Promise',component:PromisesComponent},
  {path:'Questions',component:TechnicalQuestionsComponent},
  {path:'CustomObservable',component:CustomObservableComponent},
  {path:'FilteringOperator',component:FilteringOperatorComponent},
  {path:'UtilityOperator',component:UtilityOperatorComponent},
  {path:'ErrorHandlingOperator',component:ErrorHandlingOperatorComponent},
  {path:'CombinationOperator',component:CombinationOperatorComponent},
  {path:'Subject',component:SubjectComponent},
  {path:'Interceptor',component:InterceptorExampleComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

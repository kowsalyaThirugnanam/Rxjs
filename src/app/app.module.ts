import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule }from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './Rxjs/observable/observable.component';
import { CreationOperatorComponent } from './Rxjs/observable/Operators/creation-operator/creation-operator.component';
import { PromisesComponent } from './Rxjs/promises/promises.component';
import { TechnicalQuestionsComponent } from './InterviewQuestions/technical-questions/technical-questions.component';
import { CustomPipePipe } from './Service/custom-pipe.pipe';
import {AddElementDynamicallyService} from '../app/Rxjs/ReusableCode/AddElement/add-element-dynamically.service';
import { InputOutputComponent } from './inputOutput/input-output/input-output.component';
import { CustomObservableComponent } from './Rxjs/observable/custom-observable/custom-observable.component';
import { TransformationOperatorComponent } from './Rxjs/observable/Operators/transformation-operator/transformation-operator.component';
import { FilteringOperatorComponent } from './Rxjs/observable/Operators/filtering-operator/filtering-operator.component';
import { UtilityOperatorComponent } from './Rxjs/observable/Operators/utility-operator/utility-operator.component';
import { ErrorHandlingOperatorComponent } from './Rxjs/observable/Operators/error-handling-operator/error-handling-operator.component';
import { SubjectComponent } from '../app/Rxjs/observable/Subject/subject/subject.component';
import { ReplaySubjectComponent } from './Rxjs/observable/Subject/subject/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './Rxjs/observable/Subject/subject/async-subject/async-subject.component';
import { CombinationOperatorComponent } from './Rxjs/observable/Operators/combination-operator/combination-operator.component';
import { MergeMapComponent } from './Rxjs/observable/Operators/transformation-operator/merge-map/merge-map.component';
import { ConcatMapComponent } from './Rxjs/observable/Operators/combination-operator/concat-map/concat-map.component';
import { SwitchMapComponent } from './Rxjs/observable/Operators/transformation-operator/switch-map/switch-map.component';
import {CustomInterceptorInterceptor}from '../app/Service/interceptor/custom-interceptor.interceptor';
import { InterceptorExampleComponent } from './interceptor-example/interceptor-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    CreationOperatorComponent,
    PromisesComponent,
    TechnicalQuestionsComponent,
    CustomPipePipe,
    InputOutputComponent,
    CustomObservableComponent,
    TransformationOperatorComponent,
    FilteringOperatorComponent,
    UtilityOperatorComponent,
    ErrorHandlingOperatorComponent,
    SubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    CombinationOperatorComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    InterceptorExampleComponent,
    // AddElementDynamicallyService,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:CustomInterceptorInterceptor,multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }

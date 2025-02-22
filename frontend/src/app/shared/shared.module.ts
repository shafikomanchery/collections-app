import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundErrorComponent],
  exports:[NotFoundErrorComponent]
})
export class SharedModule { }

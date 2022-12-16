import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LettersAvatarComponent } from 'src/app/modules/letters-avatar/letters-avatar.component';

export * from 'src/app/modules/letters-avatar/letters-avatar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LettersAvatarComponent
  ],
  exports: [
    LettersAvatarComponent
  ]
})
export class LettersAvatarModule {
  static forRoot(): ModuleWithProviders<LettersAvatarModule> {
    return {
      ngModule: LettersAvatarModule
    };
  }
}

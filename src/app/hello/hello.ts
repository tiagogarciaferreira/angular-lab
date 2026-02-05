import {Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

  protected title = 'Hello H2';

  protected isDisabled = false;

  protected count = signal(0);

  protected doubleCount = computed(() => this.count() * 2);

  private countLog = effect(() => {
    console.log('Count CHanged: ', this.count());
  });

  protected onClicked() {
    this.isDisabled = !this.isDisabled;
    console.log('clicked');
  }

  protected increateCounter(){
    this.count.update(value => value + 1);
  }

  protected decreaseCounter(){
    this.count.update(value => value - 1);
  }

  protected resetCounter(){
    this.count.set(0);
  }
}

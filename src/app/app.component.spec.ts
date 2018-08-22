import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'My Card Application'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('My Card Application');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('My Card Application');
  }));

  it('should render four cards', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.Card').length).toBe(4);
  }));

  it('should render all cards in non-active state', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.is-active').length).toBe(0);
  }));

  it('clicking first card should call selectCard(1)', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    spyOn(component, 'selectCard');
    const compiled = fixture.debugElement.nativeElement;
    const card = compiled.querySelector('.Card');
    card.click();
    fixture.whenStable().then(() => {
      expect(component.selectCard).toHaveBeenCalledWith(1);
    })
  }));

  it('clicking second card should call selectCard(2)', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    spyOn(component, 'selectCard');
    const compiled = fixture.debugElement.nativeElement;
    const cards = compiled.querySelectorAll('.Card');
    cards[1].click();
    fixture.whenStable().then(() => {
      expect(component.selectCard).toHaveBeenCalledWith(2);
      })

  }));

  it('selectCard() should set selectedCard to card value', async(() => {
    const component = new AppComponent();
    expect(component.selectedCard).toBe(0, '0 on startup');
    component.selectCard(1);
    expect(component.selectedCard).toBe(1, '1 when first card is clicked');
    component.selectCard(2);
    expect(component.selectedCard).toBe(2, '2 when second card is clicked');
    component.selectCard(3);
    expect(component.selectedCard).toBe(3, '3 when third card is clicked');
    component.selectCard(4);
    expect(component.selectedCard).toBe(4, '4 when fourth card is clicked');
  }));
});

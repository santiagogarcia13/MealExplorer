import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AboutPage } from './about.page';

describe('AboutPage', () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show five team members', () => {
    expect(component.members).toHaveLength(5);
  });

  it('should show the project details and course section', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.textContent).toContain('MealExplorer');
    expect(page.textContent).toContain('TheMealDB public API');
    expect(page.textContent).toContain('BSIT 3-F');
  });

  it('should include a contribution for every team member', () => {
    expect(component.members.every((member) => member.role.trim().length > 0)).toBe(true);
    expect(fixture.nativeElement.textContent).toContain('Contributed to project planning and application development');
  });
});

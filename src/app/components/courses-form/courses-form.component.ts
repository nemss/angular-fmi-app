import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {
  isEditMode = false;
  currentId: string;
  form: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private courseService: CoursesService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      image: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required]
    });

    if (this.route.snapshot.params.id) {
      this.isEditMode = true;
      this.currentId = this.route.snapshot.params.id;
      this.courseService.getCourse(this.currentId).subscribe(course => {
        this.form.patchValue(course);
      });
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.courseService.editCourses(this.form.value, this.currentId);
    } else {
      this.courseService.addCourses(this.form.value);
    }

    this.router.navigateByUrl('/all-courses');
  }
}

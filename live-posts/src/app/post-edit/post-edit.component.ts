import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;  // have null or value have for this form
  index: number = 0;
  editMode = false;   // add page or edit page

  constructor(
    private postService: PostService,   // connect with post Service
    private router: Router,             // connect with router
    private route: ActivatedRoute      // this use for routeer url parameters
  ) {}

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath = '';

    //when index change read the parame ===> call arrow function
    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        console.log(params['index']);

        this.index = params['index'];

        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;

        this.editMode = true;
      }
    });

    //1sr param pass update form value, 2nd param validation rule
    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),  // formControl handel in ts side, 2nd param is validators
      description: new FormControl(description, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
    });
  }

  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    // Ready with Object
    const post: Post = new Post(
      title,
      description,
      imagePath,
      'test@test.com',
      new Date(),
      0
    );

    // Calling service
    if (this.editMode) {
      this.postService.updatePost(this.index, post);
    } else {
      this.postService.addPost(post);
    }

    // Navigate to /post-list
    this.router.navigate(['/post-list']);
  }
}

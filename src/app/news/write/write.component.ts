import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category';
import { CategoryService } from '../../shared/db/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../user/shared/user';
import { UserService } from '../../user/shared/user.service';
import { News } from '../shared/news';
import { NewsService } from '../../shared/db/news.service';
import { StorageService } from '../../shared/storage/storage.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'tik-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  categories: Category[];
  user: User;
  selectedCatId = '';
  writeForm: FormGroup;
  img: string;


  constructor (private categoryService: CategoryService,
               private fb: FormBuilder,
               private userService: UserService,
               private newsService: NewsService,
               private storageService: StorageService,
               private snack: MatSnackBar,
               private router: Router) {
    this.writeForm = fb.group({
      displayName: ['', [Validators.required, Validators.minLength(4)]],
      text: '',
    });

  }


  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(categories => {
        this.categories = categories;
      });
    this.userService.getUser()
      .subscribe(user => {
        this.user = user;
      });
  }

  uploadNewImage(fileList) {
    console.log(fileList.target.files[0].name);
    if (fileList.target.files[0]) {
      const file = fileList.target.files[0];
      const path = 'news-images/' + fileList.target.files[0].name;
      this.storageService.upload(path, file).downloadUrl.subscribe(
        url => {
          this.img = url;
          this.snack.open('Uploaded an Image!', null, {
            duration: 4000,
            panelClass: ('snack-color-success')
          });
          // this.save();
        }
      );
    } else {
      console.log('wrong: ' + fileList.target.files[0]);
      this.snack.open('You need to drop a single png or jpeg image', null, {
        duration: 4000,
        panelClass: ('snack-color-failure')
      });
    }
  }



  saveClicked() {
    const writeModel = this.writeForm.value;
    const data = {
      text: writeModel.text,
      displayName: writeModel.displayName,
      imgUrl: this.img,
      ownerUid: this.user.uid,
      ownerFirstName: this.user.firstName,
      ownerMiddleName: this.user.middleName,
      ownerLastName: this.user.lastName,
      categoryUid: this.selectedCatId,
      created: new Date().toLocaleDateString('en-GB'),
    } as News;
    this.newsService.saveNews(data);
    this.router.navigateByUrl('/news-list');
    this.snack.open('News: ' + writeModel.displayName + ' was created', '', {
      duration: 4000,
      panelClass: ('snack-color-success')
    });
  }

}

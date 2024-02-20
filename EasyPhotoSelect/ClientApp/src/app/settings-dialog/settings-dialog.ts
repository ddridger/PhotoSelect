import {Component, Inject} from "@angular/core";
import {PhotoSelectSettings} from "../home/home.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'settings-dialog',
  templateUrl: './settings-dialog.html',
  styleUrls: [ './settings-dialog.scss']
})
export class SettingsDialog {

  public filterAssigned: boolean = false;
  public yesno: boolean = false;
  public categories: string[] = [];
  public category: string | undefined = undefined;
  public hint: string | undefined = undefined;
  public formats: string[] = [];

  constructor(public dialogRef: MatDialogRef<SettingsDialog>,
              @Inject(MAT_DIALOG_DATA) public data: PhotoSelectSettings,) {
    this.filterAssigned = data.filterAssignedImages;
    this.yesno = data.yesno;
    this.categories = data.categories;
    this.formats = data.formats;
  }

  public cancel():void {
    this.dialogRef.close();
  }

  public saveData(): void {
    const result: PhotoSelectSettings = {
      filterAssignedImages: this.filterAssigned,
      yesno: this.yesno,
      categories: this.categories,
      formats: this.formats
    }

    this.dialogRef.close(result);    
  }

  public setfilterAssignedImages(filterAssignedImages: boolean): void {
    this.filterAssigned = filterAssignedImages;
  }

  public setYesNo(yesno: boolean): void {
    this.yesno = yesno;
  }

  public addCategory(): void {

    if(this.category) {
      if (this.categories.includes(this.category)) {
        this.hint = 'bereits vorhanden';
      } else {
        this.categories.push(this.category);
        this.hint = undefined;
        this.category = "";
      }
    } else {
      this.hint = 'Ist leer';
    }
  }

  public removeCategory(category: string): void {
    const index = this.categories.indexOf(category);
    if(index >= 0) {
      this.categories.splice(index, 1);
    }
  }
}

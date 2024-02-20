import { Component } from '@angular/core';
import {SettingsDialog} from "../settings-dialog/settings-dialog";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import { clone } from '../functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss']
})
export class HomeComponent {


  // private _lightMode : boolean = false;
  // public get lightMode() : boolean {
  //   return this._lightMode;
  // }
  // public set lightMode(v : boolean) {
  //   this._lightMode = v;
  // }

  public formats: string[] = [
    "jpg",
    "raw"
  ];


  public settings: PhotoSelectSettings = {
    categories: [
      "Test",
      "Test2",
      "Test3",
      "Löschen"
    ],
    formats: [
      "All",
      "jpg",
      "raw"
    ],
    yesno: true,
    filterAssignedImages: false
  };

  constructor(private dialog: MatDialog) {
  }

  public openSettings(): void {
    const dialogRef: MatDialogRef<SettingsDialog> = this.dialog.open(SettingsDialog, { data: clone(this.settings) });

    dialogRef.afterClosed().subscribe((result: PhotoSelectSettings) => {
      if(result) {
        this.settings = clone(result);
      }
    })
  }

  public openFolder():void {

  }
}

export interface CategoryButton {
  name: string;
  iconClass?: string;
}

export interface PhotoSelectSettings {
  categories: string[],
  formats: string[]
  yesno: boolean,
  filterAssignedImages: boolean,

}


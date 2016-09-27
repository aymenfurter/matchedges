import { Component, HostListener } from '@angular/core';
import { Element } from './element';
import { Grid } from './grid';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  /*styles: [`
    .cell {
      height: 200px;      
    }   
  `, `.row {
    	width: 400px;
    	height: 200px;
    }`],*/
  styleUrls: ['app.component.css']
})
export class AppComponent {
	private gridPlaced: Grid;
    private gridToBePlaced: Grid;
    private cellWidth: number;
    private cellHeight: number;

    constructor() {        
    }
 
    ngOnInit() {        
    	let eleGrid: Element[][] = [];

    	eleGrid[0] = [];
    	eleGrid[1] = [];
    	eleGrid[2] = [];

    	let element1: Element =  new Element(2, 1, 1, 1);    	
    	eleGrid[0][0] = element1;
    	let element2: Element =  new Element(3, 1, 1, 1);    	
    	eleGrid[0][1] = element2;
    	eleGrid[0][2] = element2;
    	eleGrid[0][3] = element2;

    	let element3: Element =  new Element(2, 1, 1, 1);    	
    	eleGrid[1][0] = element3;
    	let element4: Element =  new Element(2, 1, 1, 1);    	
    	eleGrid[1][1] = element4;
    	eleGrid[1][2] = element4;
    	eleGrid[1][3] = element4;

    	let element5: Element =  new Element(2, 1, 1, 1);    	
    	eleGrid[2][0] = element5;
    	let element6: Element =  new Element(2, 1, 1, 1);    	
    	eleGrid[2][1] = element6;
    	eleGrid[2][2] = element6;
    	eleGrid[2][3] = element6;


    	this.gridPlaced = new Grid(3, 4, eleGrid);
    	this.gridToBePlaced = new Grid(3, 4, eleGrid);	

    	this.updateCellFormat(window.innerWidth, window.innerHeight);
    }    

    @HostListener('window:resize', ['$event'])
	onResize(event) {
		this.updateCellFormat(event.target.innerWidth, event.target.innerHeight);

	}

	updateCellFormat(width: number, height: number) {
		let maxWidth: number = Math.floor(width - 16 - (this.gridPlaced.elements[0].length) * 12);
		let maxHeight: number = Math.floor((height - 16 - (this.gridPlaced.elements.length) * 22) / 2);
		this.cellWidth = Math.floor((maxWidth / this.gridPlaced.elements[0].length));
		this.cellHeight = Math.floor((maxHeight / this.gridPlaced.elements.length));	
	}
}

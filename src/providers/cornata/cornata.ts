import { Injectable } from '@angular/core';

import {empty} from 'is-empty';

/*
  Generated class for the CornataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CornataProvider {

	dbJson = {
		database :``
	};
	tables = [];
	columns = [];

  constructor() {
    console.log('Hello CornataProvider Provider');
  }

  setDatabase(dbName:string):void {
		this.dbJson.database = dbName;
	}
	
	adddTable(tableName:string, primayKey: string):void{
		this.tables.push({ name: tableName, primary: primayKey, columns:[] });
	}

	addColumn(tableName: string, columnData: Object):void{
		this.tables.forEach((element)=>{
			if(element['name'] == tableName){
				element['columns'].push(columnData);
			}
		},this);
	}

	get():Object{
		this.dbJson['tables'] = this.tables;
		return this.dbJson;
	}

	createColumnData(columnName: string, columnType: string, length: number) : Object{
		let c = {
			name: columnName,
			type: columnType
		};
		if(empty(length)){
			return c;
		}
		else{
			c['length'] = length;
			return c;
		}
	}
}

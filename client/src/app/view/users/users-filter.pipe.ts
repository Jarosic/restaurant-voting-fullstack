import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  transform(list: any, searchStr: string, fieldName: string): any {
    if (list) {
      if (list.length === 0 || searchStr === '') {
        return list;
      }
      return list.filter(
        data =>
          data[fieldName].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1
      );
    }
  }
}

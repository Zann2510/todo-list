import { Injectable } from '@nestjs/common';
import { CreateSiswaDto } from './dto/create-siswa.dto';


@Injectable()
export class SiswaService {
  private readonly  siswa : CreateSiswaDto[] = [];
  create(createSiswaDto: CreateSiswaDto) {
    this.siswa.push(createSiswaDto);
    return createSiswaDto;
  }

  findAll() {
    if(this.siswa.length === 0){
      return "Data Kosong";
    }else{
        return this.siswa;
    }
  
  }

  findOne(nisn: string) {
      const s = this.siswa.find(s => s.nisn === nisn);
    if(!s){
      return `Data ${nisn} Tidak  Ditemukan`;
    }
    return s;
  
  }

  update(nisn: string, updateSiswaDto: CreateSiswaDto) {
    let s: any = this.findOne(nisn)

    if(!s){
      return `Data ${nisn} Tidak  Ditemukan`;
    }else{
       Object.assign(s, updateSiswaDto);
          return s;
    }
   
 

  }

  remove(nisn: string) {
    let s: any = this.findOne(nisn)
    if(!s){
      return `Data ${nisn} Tidak  Ditemukan`;
    }else{
       this.siswa.splice(this.siswa.indexOf(s),2);
       return `Data ${nisn} Berhasil Dihapus`
    }
   

  }
}


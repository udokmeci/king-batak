import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oyun',
  templateUrl: './oyun.component.html',
  styleUrls: ['./oyun.component.css']
})
export class OyunComponent implements OnInit {
  oyun:Oyun;
  constructor() {
  	let deste=new Deste();
  	deste.init();
  	this.oyun=new Oyun(deste);


  	console.log(deste);
  }

  ngOnInit() {



  }

  at(atma){
  	this.oyun.at(atma);
  }

}

export class Kagit{
	renk:Renk
	sayi:number
	constructor(renk,sayi){
		this.renk=renk
		this.sayi=sayi;
	}

	isRenk(renk:Renk){
		return this.renk.sayi==renk.sayi;
	}
	sameRenk(kart:Kagit)
	{
		return kart.isRenk(this.renk)
	}
}
export class Oyuncu{
	puan=0;
	el:Deste
	numara:number
	aldiklari:Yer[]=[];
	constructor(numara){
		this.numara=numara;
		this.el=new Deste();
	}
}



export class Renk{
	static Karo=1;
	static Kupa=2;
	static Sinek=3;
	static Maca=4;
	static get RENKLER(){
		return [
			new Renk(Renk.Karo), 
			new Renk(Renk.Kupa), 
			new Renk(Renk.Sinek), 
			new Renk(Renk.Maca)
		];
	}
	sayi:number
	constructor(sayi){
		this.sayi=sayi;
	}

	get name()
	{
		switch (this.sayi) {
			case 1:
				return 'Karo'
			case 2:
				return 'Kupa'
			case 3:
				return 'Sinek'
			case 4:
				return 'Maca'
		}
	}
}

export class Deste {

	kagitlar:Kagit[]=[];
	shuffle() {
	    for (let i = this.kagitlar.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        	[this.kagitlar[i], this.kagitlar[j]] = [this.kagitlar[j], this.kagitlar[i]];
    	}
	    return this.kagitlar;
	}

	init()
	{
		const renkler=Renk.RENKLER;
		renkler.forEach(renk=>{
			for(let i =2; i<=14; i++){
				this.kagitlar.push(new Kagit(renk,i));
			}
		})
	}

	filterRenk(renk:Renk){
		return this.kagitlar.filter(kart=>kart.isRenk(renk)).sort((a,b)=>a.sayi>b.sayi ? -1 : +1);
	}

	hasRenk(renk:Renk){
		return this.filterRenk(renk).length;
	}
}

export class Atma{
	kart:Kagit
	oyuncu:Oyuncu
	constructor(oyuncu, kart){
		this.oyuncu=oyuncu
		this.kart=kart
	}
}

export class Yer{
	atmalar:Atma[]=[];
	atma(atma){
		atma.oyuncu.el.kagitlar=atma.oyuncu.el.kagitlar.filter(kart=>kart!=atma.kart);
		this.atmalar.push(atma);
	}


	filterRenk(renk:Renk){
		return this.atmalar.filter(atma=>atma.kart.isRenk(renk)).sort((a,b)=>a.kart.sayi>b.kart.sayi ? -1 : +1);
	}



	hasRenk(renk:Renk){
		return this.filterRenk(renk).length;
	}

	first()
	{
		return this.atmalar.length ? this.atmalar[0] : null; 
	}

	firstKart()
	{
		let first = this.first();
		return first ? first.kart : null;
	}
}

export class Ihale{
	oyuncu:Oyuncu
	renk:Renk
}
export class Oyun{
	oyuncular:Oyuncu[];
	tur=0;
	koz:Renk;
	durum:string='ihale';
	yer = new Yer();
	kozOut=false;



	ihale:Ihale;


	constructor(deste){

		deste.shuffle();
		this.oyuncular=Renk.RENKLER.map(renk=>new Oyuncu(renk.sayi));
		this.koz=Renk.RENKLER[1];

		deste.kagitlar.map((kagit,index)=>{
			let oyuncu = this.oyuncular[index % 4];
			if(kagit.renk.sayi==2 && kagit.sayi==2 ){
				this.currentOyuncu=oyuncu;
			}
			oyuncu.el.kagitlar.push(kagit);
			return oyuncu.el.kagitlar=oyuncu.el.kagitlar
				.sort((a,b)=>a.renk.sayi>=b.renk.sayi?1:-1)
				.sort((a,b)=>a.sayi>b.sayi?1:-1)
		});
		console.log(this);


	}
	currentOyuncu:Oyuncu;
	next()
	{
		let num=this.currentOyuncu.numara
		this.currentOyuncu=this.oyuncular[num++ % 4];
	}



	at(atma){
		if(atma.oyuncu!=this.currentOyuncu){
			alert('siran degil');
			return;
		}
		let first= this.yer.first()
		if(!first){
			if(atma.kart.renk.sayi==this.koz.sayi){
				alert('KOZ');	
				if(!this.kozOut){
				    alert('koz cikmadan koz atilmaz');
					return;
				}
			} 
		} else {
			let ilkkagit=first.kart;
			console.log(ilkkagit);

			let oyuncuSame=atma.oyuncu.el.filterRenk(ilkkagit.renk);
			let oyuncuKoz=atma.oyuncu.el.filterRenk(this.koz);
			console.log(oyuncuSame, oyuncuKoz);
			if(oyuncuSame.length){
				if(!atma.kart.sameRenk(ilkkagit)){
					alert('Ayni kart mecburi');
					return;
				}
				let oyuncuBig=oyuncuSame[0];
				console.log(oyuncuSame);
				let enBuyukKart=this.yer.filterRenk(ilkkagit.renk)[0];
				console.log(enBuyukKart);
				if(oyuncuBig.sayi>enBuyukKart.kart.sayi){
					if(atma.kart.sayi<enBuyukKart.kart.sayi){
						alert('Yukselmek mecburi');
						return;
					}
				}
			} else if(oyuncuKoz.length) {
				if(!atma.kart.isRenk(this.koz)){
					alert('Koz mecburi');
					return;
				}
				let oyuncuBig=oyuncuKoz[0];
				console.log(oyuncuKoz);
				let enBuyukKart=this.yer.filterRenk(this.koz)[0];
				console.log(enBuyukKart);
				if(enBuyukKart)
				if(oyuncuBig.sayi>enBuyukKart.kart.sayi){
					if(atma.kart.sayi<enBuyukKart.kart.sayi){
						alert('Koz Yukselmek mecburi');
						return;
					}
				}
				this.kozOut=true;
			}
		}
			
		this.yer.atma(atma)
		if(this.yer.atmalar.length==4){
			this.tur++;
			let highestKoz=this.yer.filterRenk(this.koz);
			let first=this.yer.first();
			let highestIlk=this.yer.filterRenk(first.kart.renk);
			let kazananOyuncu=highestIlk[0].oyuncu;
			if(highestKoz.length){
				kazananOyuncu= highestKoz[0].oyuncu;
			}

			if(this.tur==13){
				alert('oyun bitti');
			} else {
				kazananOyuncu.puan++
				kazananOyuncu.aldiklari.push(this.yer);
				this.currentOyuncu=kazananOyuncu
				this.yer=new Yer();
				
			}
			console.log('El Bitti');
		} else {
			this.next();
		}
		console.log(atma);
	}
}



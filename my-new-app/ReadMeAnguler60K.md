##########################################################
Angular 12/13 tutorial 
##########################################################
https://www.youtube.com/watch?v=G6ZX7ivQhzI&list=PL8p2I9GklV47eNpoo4Fr6fkags72a8F0v&index=5   [64 videos]

=======> Git push---> list of project Push (from: D:\6_ANGULAR_K\AngularJS_2023_All]
=======> Notepad++ backroung ----> settings-> style conf->  seleat theam
=======> Windows  backroung ----> windows settings-> persanalization ->  colour-> choosecoloue: dark

1) beging
	install
	Structure
	basic
	mvc
	advance
	routing
	API
	forms
	interview/project/new in angular
	use CSS
	
2) install angular
		install node
		npm install -g @angular/cli    ||| npm install -g @angular/cli@9.1.2  (define specific angular version)
		ng new my-new-app   ===>  Y+Y+CSS --> enter
		cd my-new-app
		npm install
		set NODE_OPTIONS=--openssl-legacy-provider
		ng serve --------> http://localhost:4200/
		
		
		==> 2 nodejs version manage in same system
			install >>> nvm   
			
3) File & Folder Structure
		app
			app.component.css
			app.component.html
			app.component.ts     ---> login function in a component
			app.component.spec.ts  ----> testing file
			app.module.ts        ----> set of commponent ( login |logout| updatepassword|fogen password) is the complete modile
			
		assers ---> public files imahes | fonts 
		enfironment ----> dev | prod| uat env???
		main.js ---> bridge of html & angular
		stylr.css ---> common css file forr all component
		
		
		--------> advance
		package-lock.jso ====> show the full details from all the libeary (pacage.json only summaty)
		angular.json  ---> application cong (main.js path)
		tsscript.json ---> type script configuration
		browserlist   ---> browser list and versions
		karama.cond.ts ====> configuration of ur testing file
		polifile.ts  ---> support all browser (load this file before the app)
		
		
4) first changes in app4
		app.component.ts
		app.component.html  ---> msg send and received

----------------------------------------------------------------------------------------------------------> revisit from hear do the developement
5) Interpolation {{dataFromComponentTs}}             
		** timely dynamic data in html page
		___.ts file set data and ___.html file resived data and ghowing ====> sime js function 
																					can do in html {{1+2}} ==>3
																					can noy do in html {{1++}} ==>error
																					
6) Angular cli & import commants
		aoto generate comments
		cd MyProject/
		6.1) >>ng generate component login ( auto create login folder and 4 comp files)
		
		6.2) >>ng generate module user-auth     -> 1 file
			   ng generate component user-auth/signin   --> 4 file 
			   
			   ng generate service callService  ----> 2 ts file (service+ test)
			   ng generate class Laptop  ----> 2 ts file (service+ test)
			   
		6.4) build mobile
				ng build  ----> create dist/* files 
					get this files and deployed to our server(tomcat server)
					
7) Component
		single page components
			1) headder
			2) footer
		
			7.1) ng generate component login  
					when create component 4 file created + app.module.js will updated with new component
					
					//class AppComponent{} decorate with @Component , have 3 mata data
					  1) selector: 'app_aboutus_k', //html element =======> <app_aboutus_k> </app_aboutus_k> this name tag can call from outher component
					  2) templateUrl: './app.aboutus.html',  // view part of the Component (view template)
					  3) styleUrls: ['./app.aboutus.css']
					
					component need to maintain as small as posibal, (Eg: headerComponent ---> another component mentComponent)
				
8) Component with Inline Style & inline Template
		app.component.ts
			@Component({
			2) templateUrl: './app.aboutus.html',  
			3) styleUrls: ['./app.aboutus.css']   ---> if no CSS file 
		})

		export class AppComponent{
			title_k="myprojK"
		}
		
		if no file inside "login.component.ts" can write code
		8.1) ng generate component login --inline-style =====>file generate withh out CSS (only 3)]	
					styleUrls: [can write css code hear]
					
		8.2) ng generate component login --inline-template =====>file generate withh out HTML (only 3)]	
					templateUrl: 'can write html code hear'
					
		8.3) ng generate component login --inline-style --inline-template =====>file generate withh out HTML/CSS (only 2)]	
					styleUrls: [can write css code hear],
					emplateUrl: 'can write html code hear'


9) Module   ------------------------------------------------------------> do it later 
		1) Module (user-auth)  ----> each module is independent
				>>ng generate module user-auth
				
				1.1) Component 1 --> user login
						>>ng generate component user-auth/login
						
				1.2) Component 2 --> register
				1.3) Component 3 --> forget password
				1.4) Service 1	--> API Call
				1.5) Pips 1		--> Helper
				1.6) Classess
				1.7) Interfaces
				
				
		2) AppModule is the root module
				Browser Module

10) make and call function on button click
		10.1) defune function inside class (app.component.ts)
				  // type sctipt feature (must define type) name:any // name: string | number // tsconfig.ts--> "strict": true,
				  getName(name:string){   
					alert("my name is "+name);
				  }
				  
				  
		10.2) call the function with paramente, when click (app.component.html)
				<button (click)="getName('kresahnR')">click me</button>
		

10)  Events | blue | keyup, | mouseover etc
			mouse even capture ----> print on consile.warn(data)
			() ----> keyup,keydown/inout, blur , mouseover event tested
			
11) Get Input field Value| button data
			<input type="text" #boxK1 placeholder="key up  box"  />
			<button (click)="getData(boxK1.value)">Send Data</button>
			<p>Text Box Value is: {{displayVal}}</p>


			  displayVal:string='';
			  getData(name:string){   
				console.warn(name);
				this.displayVal=name;
			  }
			  
			  
12) Counter example +/ - button 
			  counterK(type:string){   
				type==='add'?this.cointerV++:this.cointerV--;
			  }

13) Basic style [Priority ===> inline style-> internal style -> component.css-> style.css]
		.headerStyle{
		     color: red;
		}
		component Style ---> style load for only for 1 component
			computty.component.css
			<p class="headerStyle" >comptutor60 works!</p>
			
		Global Style  ---> load for all Component
			styles.css	
			
		Internal Style ----> ovride global style 
			<p style="color: yellow">comptutor60 works!</p> 
			
		internal style
			<style>
				.headerStyle{
					color: green;
				}
			</style>
		
14) propory binding > inter polation
		  nameK="kreshanr";  
		  isDisableK=false;
  
			inter polation ---> support int/String
				<input type="text" value={{nameK}} disabled={{isDisableK}}/> 
				
			propory binding---> support int/string/boolean
				<input type="text" [value]=nameK [disabled]=isDisableK/>
				

15) if condition 
		<h1 \*  ngIf="showK; then ifBlockT else elseBlockF"> </h1>
			

16) Multiple condition or else if
		colorK==='blue' ----->checking [==]:check value only    [===]: check value and type
		
		<ng-template [ngIf]="colorK==='red'">    ----------> with ngIf we have to do all the condition
            <p>this is red</p>
        </ng-template>
		
17) Switch Case condition
		<div [ngSwitch]="colorK">
            <p \*ngSwitchCase="'red'"> switch call red</p>
            <p \*ngSwitchDefault > switch call default option</p>
        </div>

10.55-----> 12
18) for loop4
		<p *ngFor="let usr of userArray">
             Array List: {{usr}}
        </p>

        <p *ngFor="let usr of userObject">
           Object Detail: {{usr.name}} :  {{usr.email}}: {{usr.phone}}
        </p>
		
19) nested loop (loop inside loop)
		userList=[
			{name:'kresh',phone:'123',accounts:['facebook','ucsc','tebs']},
			{name:'dhar',phone:'222',accounts:['facebook','excel']},
		 ]

		<ul *ngFor="let user of userList">
        <li>{{user.name}} </li> 
        <li>{{user.phone}} </li> 
        <ul *ngFor="let account of user.accounts">
            <li>{{account}} </li>
        </ul>
    </ul>

11.26
20) Style Binding | Dynamic Style  (dynamicalt change colour when button click
		<[style.font-size]="'50px'">
		<p [style.color]="colorK2" [style.font-size]="sizek"> colour styleBinding For buttonClick</p>
		<button (click)="updateColor()">Update Color</button


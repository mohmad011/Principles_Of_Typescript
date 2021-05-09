function sum(op,...values){
	let sum=0;
	for(let n of values){
		sum+=n
	}
	return sum
}

let s = sum("Sum",44,55,64,3232,3)

console.log(s)

////////////////////////////////////////////////////////

var eventOne = document.getElementById("eventOne")
eventOne.addEventListener("click" , ()=>{
	eventOne.innerHTML = "Hello From Event One"
})

////////////////////////////////////////////////////////

let msg:string="Hello Typescript"
alert(msg)

let N;
N = 'Hello mohmad'

let NewD: <string>N.endswith('d')
let NewD1: (N as string).endswith('d')

////////////////////////////////////////////////////////

let infoOne={
	"Name":"mohmad",
	"Age":24
}

let {Name:UserName , Age} = infoOne

////////////////////////////////////////////////////////

let a = 2;
let b = 3;
[a,b] = [b,a]

////////////////////////////////////////////////////////

let interName="mohmad";
let interAge=24;
console.log(`Hello ${interName} your age is ${interAge}`)

////////////////////////////////////////////////////////

let jobs = ["developer" , "admin" , "tester"]

for(let job of jobs){
	console.log(`Title Job Is: ${job}`)
}

////////////////////////////////////////////////////////

// Variable in Typescript

// Variable Immutable ==> Can Not Manification on it

let myName:string;
myName="mohmad"

let myAge:number;
myAge=24

let married:boolean;
married=false

// Variable mutable ==> Can Manification on it

let myInfo:any = [];

myInfo.push("Front End Developer")

myInfo.push(24)

////////////////////////////////////////////////////////

function test(name:string,age:number):string
{
	return `Hello ${name} your Age Is: ${age}`
}

function testTow(first:any,second:boolean) // This Is The First Expect
function testTow(first:string,second:number) // This Is The Second Expect
function testTow(first:string|any,second:number|boolean) // This Is The Third Expect
{
	if ( typeof(first) === "string") {

		return `Hello Info Fisrst Is ${first} And Second Info Is: ${second}`
		console.log("The First Has Type Of  String")
	}else{
		return `Hello Info Fisrst Is ${first} And Second Info Is: ${second}`
		console.log("The First Has Type Of  Other")
	}
}

////////////////////////////////////////////////////////

class Animals{
	// add ? to make name and weight and height are not not necessary
	constructor(name?:string,weight?:number,height?:number){
		this.name = name
		this.weight = weight
		this.height = height
	}
	name:string
	weight:number
	height:number
	getPrice():number
	{
		return this.weight/10 * this.height
	}

	set SetHeight(height){
		this.height = height
	}

	get GetHeight(){
		return this.height
	}

}

let animals:Animals = new Animals("dog" , 220 ,32);

animals.SetHeight = 100;

let price = animals.getPrice();

let InterPrice = document.getElementById("Inter")

InterPrice.innerHTML = `The Price Is ${price} and The Height Is ${animals.GetHeight}`

////////////////////////////////////////////////////////

class AnimalsNew{
	// if you adding( public or protected or private ) you not need to describe the variables in the constructor
	constructor(public name?:string,public weight?:number,public height?:number){
	}
	name:string
	weight:number
	height:number
	getPrice():number
	{
		return this.weight/10 * this.height
	}

	set SetHeight(height){
		this.height = height
	}

	get GetHeight(){
		return this.height
	}

}

let animals:AnimalsNew = new AnimalsNew("dog" , 220 ,32);

animals.SetHeight = 100;

let price = animals.getPrice();

let InterPrice = document.getElementById("Inter")

InterPrice.innerHTML = `The Price Is ${price} and The Height Is ${animals.GetHeight}`

////////////////////////////////////////////////////////

// You Can Not Make Instance on This Class But Only Do Extends
abstract class AnimalsTow{
	constructor(name:string,weight:number,height:number){
		this.name = name
		this.weight = weight
		this.height = height
	}
	name:string
	weight:number
	height:number
	getPrice():number
	{
		return this.weight/10 * this.height
	}

	set SetHeight(height){
		this.height = height
	}

	get GetHeight(){
		return this.height
	}

}

// let animalsTow:AnimalsTow = new AnimalsTow('donkey' , 44 ,54) ==> Error

////////////////////////////////////////////////////////

// extends

class Monkey extends Animals {
	voice:string;
	constructor(name:string,weight:number,height:number , voice:string){
		super(name , weight , height) // this will give it value to the parent constructor 
		this.name = name
		this.weight = weight
		this.height = height
		this.voice = voice
	}

	getPrice():number
	{
		return this.weight/10 * this.height/2
	}
}

let monkey:Monkey = new Monkey("Monkey" , 220 ,32 , "Wow");

monkey.SetHeight = 150;

let priceMonkey = monkey.getPrice();

let InterPriceMonkey = document.getElementById("Inter")

InterPriceMonkey.innerHTML = `The Price Of Monkey Is ${priceMonkey} and The Height Is ${monkey.GetHeight}`

////////////////////////////////////////////////////////

// public - private - protected - static

class Information{
	// This I Can Extends It
	public name:string

	// This I Can Extends It
	public weight:number
	constructor(name:string,weight:number){
		this.name = name
		this.weight = weight
	}

	// This I Can Extends It
	public SayHello(){
		return `Hello ${this.sayName()} And Your Weight Is ${this.sayWeight()}`
	}

	// This I Can Not Extends It
	protected sayName(){
		return this.name
	}

	// This I Can Not Extends It But Use It In Only This Class
	private sayWeight(){
		return this.weight
	}
}

class myNameTow extends Information{
	Age:number;

	// This Value Will Be Constant For This Class And Olso Classes That Take Instance from here
	static serial:number = 2021 ;

	// To Call It Call this ==> nameOfClass.varStatic => Example myNameTow.chaos
	static chaos: boolean = true;
	constructor(Age:number , name:string, weight:number){
		super(name , weight)
		this.name = name
		this.weight = weight
		this.Age = Age
	}

	saySerial(){
		return myNameTow.serial + this.Age
	}

}

let myNamePrivate:myNameTow = new myNameTow(24 , "mohmad" , 95)

let myNamePrivateTow:myNameTow = new myNameTow(23 , "Ali" , 75)

myNamePrivate.SayHello()
// myNamePrivate.sayWeight() Errorr
// myNamePrivate.sayName() Errorr

myNamePrivateTow.SayHello()

myNamePrivateTow.saySerial()

////////////////////////////////////////////////////////

// interface

interface PrivateInfo{
	name:string
	age:number
}

interface infoOP{
	add(UserInfo:PrivateInfo):PrivateInfo
	delete(UserInfo:PrivateInfo)
	update(UserInfo:PrivateInfo)
}

class UserOP implements infoOP{
	add(UserInfo:PrivateInfo):PrivateInfo{
		return UserInfo
	}
	delete(UserInfo:PrivateInfo){

	}
	update(UserInfo:PrivateInfo){

	}
}

////////////////////////////////////////////////////////

/// enum

/// Use This To Make Code More Reedable
enum operation{
	Add = 1,
	Sub = 2,
	Mul = 3,
	Div = 4
}

let num1 = 3;

let num2 = 4;

let Operation = 1;

if (Operation === operation.Add) {

	num1 + num2
}
if(Operation === operation.Sub){
	num1 - num2
}

if(Operation === operation.Mul){
	num1 * num2
}

if(Operation === operation.Div){
	num1 / num2
}

////////////////////////////////////////////////////////

/// Generic [ generic Make The Data Is More Flexable ]

function Todo<T>(x:T){

	console.log(x)
}

Todo("mohmad")
Todo(24)

class OP<G , H>{
	constructor(x:G , d:H){

	}
}

let NewOP:OP<string , number> = new OP("mohmad" , 24)
let NewOPTow:OP<string , boolean> = new OP("Married" , false)

////////////////////////////////////////////////////////

/// Make export && import

// I Use It In ==> main.js File
export class Zoos{
	constructor(name:string,weight:number,height:number){
		this.name = name
		this.weight = weight
		this.height = height
	}
	name:string
	weight:number
	height:number
	getPrice():number
	{
		return this.weight/10 * this.height
	}

	set SetHeight(height){
		this.height = height
	}

	get GetHeight(){
		return this.height
	}

}

export class Elefant extends Animals {
	voice:string;
	constructor(name:string,weight:number,height:number , voice:string){
		super(name , weight , height) // this will give it value to the parent constructor 
		this.name = name
		this.weight = weight
		this.height = height
		this.voice = voice
	}

	getPrice():number
	{
		return this.weight/10 * this.height/2
	}
}

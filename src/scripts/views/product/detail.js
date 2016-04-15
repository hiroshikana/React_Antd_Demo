var React = require("react");
var ReactDOM = require("react-dom");

// 标签
var Tabs = require("antd/lib/Tabs");
var TabPanel = Tabs.TabPane;

// 步骤条
var Steps = require("antd/lib/Steps");
var Step = Steps.Step;

// 待render的dom
var pdt_detail = document.getElementById("pdt_detail");


import Myname from "./class.js"
var myN = new Myname("hiroshi");
console.log("public get:" + myN[name]);
console.log(myN.sayname());

// 1-1
class DrugSketch extends React.Component{
	render(){
		return (
		<div className="col-24 row drugSketch">
				<div className="col-3">
					我是图
				</div>
				<div className="col-21">
					<h3>{drugSketch.name}</h3>
					<h3>英文名称:{drugSketch.enName}</h3>
					<h3>关联科室:{drugSketch.associateDept}</h3>
				</div>
		</div>
		);
	}
}

// detail页面
// 0
class Detail extends React.Component{
	render(){
		return(
			<div>
				<TopBlock/>
				<SubBlock/>
			</div>
		);
	}
}

// 1-2
class InfoBlock extends React.Component{
	render(){
		return (
			<div className="col-7 infoBlock row" key = {this.props.key}>
				<div className="col-8">
					我是图
				</div>
				<div className="col-16">
					<h5>{this.props.title}</h5>
					<h3>{this.props.info}</h3> 
				</div>
			</div>
		);
	}
}

// TopBlock 
// 1
class TopBlock extends React.Component{
	render(){
		return (
			<div>
				<div className="row">
					<DrugSketch/>
				</div>
				<div className="row">
					{InfoBlocks}
				</div>
			</div>
		);
	}
}

//SubBlock
// 2
class SubBlock extends React.Component{
	
	render(){
		return (
			<Tabs defaultActiveKey = "1" onChange = {_onchange}>
				<TabPanel tab = "药品说明" key = "1"><DrugTree/></TabPanel>
				<TabPanel tab = "学术文献" key = "2">content2</TabPanel>
			</Tabs>
		);
	}
}

// SubBlock （tabs下内容）
// 2-1
class DrugTree extends React.Component{
	render(){
		return (
			<Steps direction = "vertical" current = {1}>{steps}</Steps>
		);
	}
}

// 药品说明内容
const steps = [
	{
		title:"成分",
		description:"本品为..."	
	},
	{
		title:"成分",
		description:"本品为..."	
	},
	{
		title:"成分",
		description:"本品为..."	
	},
	{
		title:"成分",
		description:"本品为..."	
	},
	{
		title:"成分",
		description:"本品为..."	
	},

].map((data,index) => <Step key = {index} title = {data.title} description = {data.description}/>);


const InfoBlocks = [
	{
		title:"价格",
		info:"￥12.5/盒"
	},
	{
		title:"医保信息",
		info:"甲类"
	},
	{
		title:"上市时间",
		info:"2015/01/01"
	}
].map((data,index) => <InfoBlock key = {index} title = {data.title} info = {data.info}/>);


const drugSketch = {
	name:"达克宁",
	enName:"Gyno-Daktarin",
	associateDept:"呼吸科\内分泌科"
}

// 切换tab的时候render内容
function _onchange(){
	console.log("tabs change");
}


ReactDOM.render(<Detail/>,pdt_detail);

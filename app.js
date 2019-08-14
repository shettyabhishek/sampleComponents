var app = angular.module('plunker', ['ui.multiselect','ui.bootstrap']);

app.controller('MainCtrl', function($scope,$filter,myService) {
	$scope.name = 'World';
	$scope.cars = [{id:1, name: 'Audi'}, {id:2, name: 'BMW'}, {id:1, name: 'Honda'}];
	$scope.selectedCar = [];
	$scope.fruits = [{id: 1, name: 'Apple'}, {id: 2, name: 'Orange'},{id: 3, name: 'Banana'}];
	$scope.selectedFruit = null;
	$scope.data1 = [
		{"Country":"Australia","Toner Quantity":8},
		{"Country":"China","Toner Quantity":6},
		{"Country":"India","Toner Quantity":11},
		{"Country":"South Korea","Toner Quantity":1}
	];
	$scope.data2 = [
		{"CustomerName":"FORD","id":"frd","Australia":0,"China":2,"India":0,"South_Korea":0},
		{"CustomerName":"ICICI PRUDENTIAL","id":"icPrd","Australia":0,"China":0,"India":5,"South_Korea":0},
		{"CustomerName":"Kimberly Clark","id":"kmbClk","Australia":0,"China":0,"India":0,"South_Korea":1},
		{"CustomerName":"McDonalds","id":"mcD","Australia":1,"China":0,"India":0,"South_Korea":0},
		{"CustomerName":"Novartis","id":"nrt","Australia":1,"China":0,"India":0,"South_Korea":0},
		{"CustomerName":"Origin Energy","id":"orgEn","Australia":3,"China":0,"India":0,"South_Korea":0}
	];		
	$scope.getHeaders = function(arr) {
		return Object.keys(arr[0]);
	};	
	$scope.showPopOver = false;
	
	//All Data from the service
	var accountNames = [{"name":"Conley Stone"},{"name":"Vang Barrett"},{"name":"Celina Nichols"},{"name":"Terry Blevins"},{"name":"Pruitt Kane"},{"name":"Carlene Wood"},{"name":"Barr Burks"},{"name":"Moody Terrell"},{"name":"Osborne Sparks"},{"name":"Lupe Meyer"},{"name":"Blake Bolton"},{"name":"Tamika Hays"},{"name":"Shauna Hayes"},{"name":"Kayla Horton"},{"name":"Chandra Walls"},{"name":"Carey Silva"},{"name":"Cortez Hansen"},{"name":"Whitney Curtis"},{"name":"Edith Navarro"},{"name":"Mitzi Bowers"},{"name":"Barrera Wilkinson"},{"name":"Wendy Benjamin"},{"name":"Santana Ramirez"},{"name":"Carmella Howe"},{"name":"Janis Hendricks"},{"name":"Irwin Collier"},{"name":"Elsa Velasquez"},{"name":"Maynard Harrington"},{"name":"Lane Patterson"},{"name":"Contreras Ochoa"},{"name":"Ila Holt"},{"name":"Walton Porter"},{"name":"Reed Knowles"},{"name":"Flowers Love"},{"name":"Mccarthy Sheppard"},{"name":"Carrillo Keller"},{"name":"Roach Le"},{"name":"Burt Glass"},{"name":"Holloway Larsen"},{"name":"Maddox Bartlett"},{"name":"Byers Sanford"},{"name":"Roy Sullivan"},{"name":"Wolfe Weber"},{"name":"Lucas Osborn"},{"name":"Jacklyn Rollins"},{"name":"Buckner Cochran"},{"name":"Howe Mills"},{"name":"Pam Blake"},{"name":"Barnes Witt"},{"name":"Arlene Cannon"},{"name":"Wilcox Rush"},{"name":"Kristin Galloway"},{"name":"Lynne Douglas"},{"name":"Vance Rivera"},{"name":"Leonard Roy"},{"name":"Angela Willis"},{"name":"Cooper Kelley"},{"name":"Elisabeth Scott"},{"name":"Gibbs Vasquez"},{"name":"Roberson Sanchez"},{"name":"Clay Mcmahon"},{"name":"Rosella Beasley"},{"name":"Kitty Lynn"},{"name":"Marjorie Freeman"},{"name":"Munoz Conrad"},{"name":"Hernandez Townsend"},{"name":"Pearlie Mckenzie"},{"name":"Whitaker Nelson"},{"name":"Flores Smith"},{"name":"Knox Cervantes"},{"name":"Tanisha Woodard"},{"name":"Stephanie Hester"},{"name":"Adela Foster"},{"name":"Salas Blanchard"},{"name":"Howell Park"},{"name":"Mays Luna"},{"name":"Ella Martin"},{"name":"Jane Barker"},{"name":"Mckenzie Talley"},{"name":"Dawson Henderson"},{"name":"Lowery Shepard"},{"name":"Holman Guerrero"},{"name":"Monique Mooney"},{"name":"Barbra Gallegos"},{"name":"Kristie Levy"},{"name":"Noble Kennedy"},{"name":"Wooten Herring"},{"name":"Taylor Becker"},{"name":"Carpenter Espinoza"},{"name":"Kent Sykes"},{"name":"Gladys Webb"},{"name":"Nelson Humphrey"},{"name":"Webb Barr"},{"name":"Fowler Alexander"},{"name":"Suarez Huber"},{"name":"Stacy Randall"},{"name":"Peters Leblanc"},{"name":"Savage Elliott"},{"name":"Kirby Reeves"},{"name":"Flora Reynolds"},{"name":"Cardenas Grimes"},{"name":"Joyce Medina"},{"name":"Tracie Hudson"},{"name":"Reyes Leonard"},{"name":"Aline Giles"},{"name":"Strong Joyner"},{"name":"Manuela Spencer"},{"name":"Enid Anthony"},{"name":"Teresa Odom"},{"name":"Wilson Pace"},{"name":"Shaffer Schultz"},{"name":"Arnold Burton"},{"name":"Blackwell Sandoval"},{"name":"Goff Bentley"},{"name":"Pope Montoya"},{"name":"Owens Underwood"},{"name":"Hollie Nolan"},{"name":"Tricia Daniels"},{"name":"Murray Cunningham"},{"name":"Earlene Hampton"},{"name":"Day Trevino"},{"name":"Young Cline"},{"name":"Petra Chan"},{"name":"Brooke Manning"},{"name":"Leblanc Duffy"},{"name":"Shaw Wagner"},{"name":"George Beard"},{"name":"Moss Powers"},{"name":"Patsy Compton"},{"name":"Klein Goff"},{"name":"Castillo Holloway"},{"name":"Cora Long"},{"name":"Kennedy Tanner"},{"name":"Kaye Edwards"},{"name":"Sonya Kelly"},{"name":"Gamble Castaneda"},{"name":"Mcintosh Watkins"},{"name":"Michelle Murphy"},{"name":"Joann Pitts"},{"name":"Craig Knapp"},{"name":"Bowman Potter"},{"name":"Harris Maddox"},{"name":"Aida Williams"},{"name":"Debbie Heath"},{"name":"Everett Fletcher"},{"name":"Nell Gonzales"},{"name":"King Farrell"},{"name":"Gina Clements"},{"name":"Natasha Miles"},{"name":"Francisca Estes"},{"name":"Todd Berger"},{"name":"Latoya Kline"},{"name":"Mills Christian"},{"name":"Johnston Perry"},{"name":"Turner Pittman"},{"name":"Hale Mcgowan"},{"name":"Robyn Mckay"},{"name":"Keri Koch"},{"name":"Knight Rutledge"},{"name":"Bullock Barlow"},{"name":"Claudette Wilson"},{"name":"Walter Wilcox"},{"name":"Janelle Whitehead"},{"name":"Winnie Rhodes"},{"name":"Morse Diaz"},{"name":"Dean Randolph"},{"name":"Rhodes Calhoun"},{"name":"Barrett Short"},{"name":"Cobb Ball"},{"name":"Lila Roberson"},{"name":"Alejandra Singleton"},{"name":"Salinas Moon"},{"name":"Cline Woods"},{"name":"Roman Richmond"},{"name":"Esperanza Sutton"},{"name":"Ericka Simon"},{"name":"Ramsey Frank"},{"name":"Walker Ratliff"},{"name":"Gomez Harper"},{"name":"Queen Lamb"},{"name":"Douglas Conley"},{"name":"Rosalind Wiley"},{"name":"Tamera Jensen"},{"name":"Goodman Carey"},{"name":"Mavis Chase"},{"name":"Odonnell Johnston"},{"name":"Barlow Hopkins"},{"name":"Anastasia Russo"},{"name":"Denise Salazar"},{"name":"Holland Wyatt"},{"name":"Maria Mcneil"},{"name":"Monica Barton"},{"name":"Concepcion Hahn"},{"name":"Liz Flynn"},{"name":"Julia Hensley"},{"name":"Callahan Cooke"},{"name":"Scott Hale"},{"name":"Morton Farmer"},{"name":"Sherry Barnett"},{"name":"Essie Pope"},{"name":"Jackie Torres"},{"name":"Ballard Hunter"},{"name":"Christine Golden"},{"name":"Carissa Nunez"},{"name":"Humphrey Holmes"},{"name":"Lawson Alston"},{"name":"Ashlee Trujillo"},{"name":"Zimmerman Morrow"},{"name":"Wallace Abbott"},{"name":"Curry Figueroa"},{"name":"Kramer Bruce"},{"name":"Woodward Day"},{"name":"Garner Gallagher"},{"name":"Jaime Mclean"},{"name":"Alta Ellison"},{"name":"Briana Dixon"},{"name":"Bonnie Dillon"},{"name":"Tia Huff"},{"name":"Emerson Haney"},{"name":"Lessie Flores"},{"name":"Bernice Pratt"},{"name":"Frances Hogan"},{"name":"Gill Wilder"},{"name":"Duffy Travis"},{"name":"Donna Lawson"},{"name":"Campbell Lee"},{"name":"Pena Blair"},{"name":"Johanna Atkinson"},{"name":"Jacobs Downs"},{"name":"Ball Oconnor"},{"name":"Middleton Leon"},{"name":"Rojas Morales"},{"name":"Wilkinson Vargas"},{"name":"Celia Cote"},{"name":"Calhoun Briggs"},{"name":"Willa Mcleod"},{"name":"Marilyn Sloan"},{"name":"Tracy Hewitt"},{"name":"Erica West"},{"name":"Angeline Obrien"},{"name":"Alvarado Cook"},{"name":"Neal Dawson"},{"name":"Mercado Mccoy"},{"name":"Lambert Savage"},{"name":"Calderon Kim"},{"name":"Jacqueline Daugherty"},{"name":"Maryann Tillman"},{"name":"Dale Yang"},{"name":"Britney Johnson"},{"name":"Beryl Roth"},{"name":"Tami Puckett"},{"name":"Hammond Cobb"},{"name":"Lacy Walter"},{"name":"Jaclyn Davis"},{"name":"Louella Cross"},{"name":"Angelique Richard"},{"name":"Eunice Huffman"},{"name":"Walsh Berry"},{"name":"Deidre Bright"},{"name":"Jodi Good"},{"name":"Amy Padilla"},{"name":"April Adams"},{"name":"Ortiz Avery"},{"name":"Allie Gould"},{"name":"Conway Doyle"},{"name":"Karyn Gibson"},{"name":"Desiree Bryant"},{"name":"Cynthia Robles"},{"name":"Summer Melendez"},{"name":"Briggs Rose"},{"name":"Beth Pruitt"},{"name":"Estes Craig"},{"name":"Green Henson"},{"name":"Reynolds Small"},{"name":"Della Wells"},{"name":"Merritt Holland"},{"name":"Janna Mcmillan"},{"name":"Gordon Fitzpatrick"},{"name":"Jordan Valdez"},{"name":"Cathryn Ryan"},{"name":"Stewart Brewer"},{"name":"Ellison Daniel"},{"name":"Sargent Hunt"},{"name":"Bonner Rosario"},{"name":"Maureen Gilliam"},{"name":"Reid Vance"},{"name":"Luna Hart"},{"name":"Bettie Hurley"},{"name":"Leticia Simpson"},{"name":"Owen White"},{"name":"Christensen Webster"},{"name":"Ortega Lloyd"},{"name":"Cecilia Ferrell"},{"name":"Flynn Mcintyre"},{"name":"Fischer Stephens"},{"name":"Chapman Rocha"},{"name":"Rich Callahan"},{"name":"Francesca Parker"},{"name":"Petty Kent"},{"name":"Shari Lambert"},{"name":"Becky Black"},{"name":"Ashley Donaldson"},{"name":"Jenny Morin"},{"name":"Katie Stafford"},{"name":"Ferguson Stuart"},{"name":"Sheppard Tate"},{"name":"Miles Salinas"},{"name":"Gentry Sosa"},{"name":"Melba Mercado"},{"name":"Georgette Hutchinson"},{"name":"Mildred Schneider"},{"name":"Curtis Jackson"},{"name":"Moreno Winters"},{"name":"Dillard Hancock"},{"name":"Moses Powell"},{"name":"Sellers Melton"},{"name":"Wagner Wade"},{"name":"Alisha Armstrong"},{"name":"Jana Tyson"},{"name":"Mccoy Drake"},{"name":"Abby Mercer"},{"name":"Dora Tran"},{"name":"Patricia Pugh"},{"name":"Kane Deleon"},{"name":"Alexander Bradley"},{"name":"Esmeralda Thomas"},{"name":"Lillie Bean"},{"name":"Vincent Mays"},{"name":"Ora Richards"},{"name":"Lenore Duran"},{"name":"Wong Lara"},{"name":"Reba Norman"},{"name":"Penelope Gomez"},{"name":"Carey Velez"},{"name":"Kirk Howard"},{"name":"Cantrell Whitley"},{"name":"Schmidt Page"},{"name":"Yesenia King"},{"name":"Hyde Riggs"},{"name":"Atkins Gentry"},{"name":"Martin Marks"},{"name":"Macdonald Booth"},{"name":"Deann Chavez"},{"name":"Cole Petty"},{"name":"Marian Grant"},{"name":"Lee Knight"},{"name":"Amalia Molina"},{"name":"Julianne Snider"},{"name":"Franklin Sharpe"},{"name":"Jennie Francis"}]
	
	$scope.acctNames = accountNames;
	//Function called on type
	/** $scope.filterRbacAcct = function(evt){
		var filteredAcctNames = accountNames.filter(function(acctName) {
			return  acctName.name.indexOf(evt.target.value) > -1;
		});
		$scope.acctNames = filteredAcctNames;
	}**/

	//Tokenizing data
	var someData = [
		{"id":"rbc1","name":"Julianne Snider","selected": false},
		{"id":"rbc2","name":"Cole Petty Melba Mercado","selected": false},
		{"id":"rbc3","name":"Jennie Francis","selected": false},
		{"id":"rbc4","name":"Conley Stone","selected": true},
		{"id":"rbc5","name":"Vang Barrett","selected": false},
		{"id":"rbc6","name":"Celina Nichols","selected": false}
	];
	$scope.allRbcs = someData;
	
	$scope.showHideViewContent = function(){
		$scope.showView = !$scope.showView;
	}
	$scope.showView = false;
	$scope.assign = function(){
		console.info($scope.tokenItems);
		console.info($scope.allRbcs);
		$scope.showHideViewContent();
	}
	$scope.cancel = function(){
		$scope.showHideViewContent();
	}
	//Code needed from here
	myService.setAllRbcList($scope.allRbcs);
	$scope.tokenItems = $scope.allRbcs.filter(function(item){
		return item.selected === true;
	});
	$scope.removeToken = function(obj){
		var indx = _searchObject(obj.id,$scope.tokenItems);
		$scope.tokenItems.splice(indx,1);
		/** setTimeout(function(){
			$scope.$apply();
		},1);**/
		var indxInMainList = _searchObject(obj.id,$scope.allRbcs);
		$scope.allRbcs[indxInMainList].selected = false;
	}
	//_searchObject function returns object from array of objects based on passed property
	_searchObject = (key, inputArray) => {
		for (let i=0; i < inputArray.length; i++) {
			if (inputArray[i].id === key) {
				return i;
			}
		}
	}
	$scope.valueSelected = function(selectedObj, evt){
		var indx = _searchObject(selectedObj.id,$scope.tokenItems);
		evt.target.checked ? $scope.tokenItems.push(selectedObj) : $scope.tokenItems.splice(indx,1);
		var savedList = myService.getAllRbcList();
		var indxInMainList = _searchObject(selectedObj.id,savedList);
		savedList[indxInMainList].selected = evt.target.checked ? true : false;
		myService.setAllRbcList(savedList);
	}
	//Filtering the list of all rbcs based on 3 chars
	$scope.filterRbacAcct = function(evt){
		var tempData = $scope.allRbcs;
		if(evt.target.value.length >= 3) {
			var filteredAcctNames = tempData.filter(function(acctName) {
				return  acctName.name.indexOf(evt.target.value) > -1;
			});
			$scope.allRbcs = filteredAcctNames;
		} else {
			$scope.allRbcs = myService.getAllRbcList();
		} 			
	}



	var manualObj, callOutObj ;
	_initializeComponent = function(){
		var src , dest;
		$( "#sortable1, #sortable2" ).sortable({
			connectWith: ".connectedSortable",
			start: function( event, ui ) {
			},
			activate: function( event, ui ) {
				src = ui.sender[0].id;
			},
			stop: function( event, ui ){
				var droppedItem = ui.item;
				var content = droppedItem.html();						
				var addingCheckboxes = '<span class="selectors" style="float-right"><input type="checkbox" style="padding: 0 2em;"><input type="checkbox" style="padding: 0 2em;"></span>';
				dest = droppedItem.parent()[0].id;
				var dropDownVal = $("#orderTypeDropDown").val();
				if(src === "sortable1" && dest === "sortable2"){
					if(droppedItem.find("selectors").length === 0)
						content = content + addingCheckboxes;
					droppedItem.html(content);
					switch(dropDownVal){
						case 'Manual': 
							var result = manualObj.left.findIndex(x => x.id === droppedItem[0].id);
							var removed = manualObj.left.splice(result,1);
							manualObj.right.push(removed[0]);
							break;
						case 'Callout':
							var result = callOutObj.left.findIndex(x => x.id === droppedItem[0].id);
							var removed = callOutObj.left.splice(result,1);
							callOutObj.right.push(removed[0]);
							break;
						default: break;
					}
				}	else if(src === "sortable2" && dest === "sortable1"){
					droppedItem.find(".selectors").remove();
					switch(dropDownVal){
						case 'Manual': 
							var result = manualObj.right.findIndex(x => x.id === droppedItem[0].id);
							var removed = manualObj.right.splice(result,1);
							manualObj.left.push(removed[0]);
							break;
						case 'Callout':
							var result = callOutObj.right.findIndex(x => x.id === droppedItem[0].id);
							var removed = callOutObj.right.splice(result,1);
							callOutObj.left.push(removed[0]);
							break;
						default: break;
					}
				}
			}
		}).disableSelection();
	}
	
	$scope.orderTypeMode = "Manual";
	$scope.orderListItems = [];
	_getALLValService = function(){
		manualObj ={"left": [
				{itemText: 'Item1',id:"item1"},
				{itemText: 'Item2',id:"item2"},
				{itemText: 'Item3',id:"item3"},
				{itemText: 'Item4',id:"item4"},
				{itemText: 'Item5',id:"item5"},
				{itemText: 'Item6',id:"item6"}
			],"right":[]
		}
		callOutObj = {
			"left":[{itemText: 'CallOutItem1',id:"CallOutItem1"},
			{itemText: 'CallOutItem2',id:"CallOutItem2"}],
			"right": [{itemText: 'CallOutItem3',id:"CallOutItem3"}]		
		}
		_initializeComponent();
	}
	_getALLValService();
	$scope.$watch('orderTypeMode',function(newVal,OldVal){
		switch(newVal){
			case 'Manual': $scope.orderListItems = manualObj; break;
			case 'Callout': $scope.orderListItems = callOutObj; break;
			default: break;
		}
	});
});

app.directive('myDirective', function(myService) {
	return {
	  	restrict: 'EA',
	  	transclude: false,
	  	scope:{
			viewData: "=",
			popOverId: "="
		},
		replace: true,
	  	template: `
			<div class="popoverContainer"> 
				<img style="display:none;" src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif">
				<button ng-click="closePopover()">X</button>
				<div ng-if="valueObj.status == 1">
					<div>{{valueObj.name}} </div> 
					<h2>{{valueObj.value}}</h2>
				</div>	
				<div ng-if="!valueObj.status == 1">
					<div>{{valueObj.message}}</div> 
				</div>	
			</div>
		`,
		link: function(scope, element, attrs) {
            scope.callService = function() {
				//console.info(scope.popOverId);
				element[0].children[0].style.display = "block";
                myService.myFunc(scope.viewData,12).then(function(result){
					element[0].children[0].style.display = "none";
					scope.valueObj = result;	
					scope.$watch('valueObj',function(newVal,oldVal){
						setTimeout(function(){
							scope.$apply();
						},1);
					});
				},function(rejectParam) { // error callback with reason
					console.log("rejected");
				});
			}
			scope.callService();
        },
        controller: function ($scope) {
          $scope.closePopover = function (obj) {
				// manipulate obj (the anchor link) or traverse up the dom etc
				//console.info(document.querySelector('.popover').style.display);
				document.querySelector("."+$scope.popOverId).click();
			};
        }
	};
});

app.service('myService', function($q) {
	var allRbcList = [];
	this.myFunc = function (x,y) {
		var deferred = $q.defer();
		if(x.CustomerName == "McDonalds"){
			console.info("is it in here");
			deferred.resolve({
				status: 1,
				name: "McDonalds",
				value: "Food Chains",
				message: 'Got the value'
			});
		}else {
			deferred.resolve({staus: 0,name: x.CustomerName,value: "",message: 'Nothing to return'});
		}
		return deferred.promise;
	}

	this.setAllRbcList = function(data){this.allRbcList = data;}
	this.getAllRbcList = function(){return this.allRbcList;}
});

app.directive('tokenItem',function(){
	var directive = {
		restrict: 'E',
		template: `
			<div class='token' id='{{tokenData.id}}'>
				<span class='text'>{{tokenData.name}}</span>
				<span class='remove' ng-click="removetokencall(tokenData)">x</span>	
			</div>
		`,
		scope: {
			tokenData: '=',
			removetokencall: '&'
		},
		replace: false,
		controller: function ($scope) {
		}
	};
    return directive;
})

$(document).ready(function(){
//here main data is been stored , this data will be retrived from data base using ajax request 	
var data=[{"Category"  :"Brandy","CategorySize"  :"60","BrandName"  :"Mansion House","BrandPrice"  :"2","StockRemaining"  :"23","ShopId"  :"1"},{"Category"  :"Brandy","CategorySize"  :"90","BrandName"  :"Mansion House","BrandPrice"  :"4","StockRemaining"  :"0.44","ShopId"  :"3"},{"Category"  :"Brandy","CategorySize"  :"180","BrandName"  :"Mansion House","BrandPrice"  :"8","StockRemaining"  :"5","ShopId"  :"1"},{"Category"  :"Brandy","CategorySize"  :"375","BrandName"  :"Mansion House","BrandPrice"  :"16","StockRemaining"  :"3","ShopId"  :"4"},{"Category"  :"Brandy","CategorySize"  :"750","BrandName"  :"Mansion House","BrandPrice"  :"32","StockRemaining"  :"2323","ShopId"  :"1"},{"Category"  :"Whiskey","CategorySize"  :"60","BrandName"  :"Royal Challenge","BrandPrice"  :"1","StockRemaining"  :"1","ShopId"  :"4"},{"Category"  :"Whiskey","CategorySize"  :"90","BrandName"  :"Royal Challenge","BrandPrice"  :"2","StockRemaining"  :"0","ShopId"  :"1"},{"Category"  :"Whiskey","CategorySize"  :"180","BrandName"  :"Royal Challenge","BrandPrice"  :"4","StockRemaining"  :"12","ShopId"  :"1"},{"Category"  :"Whiskey","CategorySize"  :"375","BrandName"  :"Royal Challenge","BrandPrice"  :"8","StockRemaining"  :"122","ShopId"  :"1"},{"Category"  :"Whiskey","CategorySize"  :"750","BrandName"  :"Royal Challenge","BrandPrice"  :"16","StockRemaining"  :"5","ShopId"  :"4"},{"Category"  :"Vodka","CategorySize"  :"60","BrandName"  :"Grey Goose","BrandPrice"  :"3","StockRemaining"  :"23","ShopId"  :"1"},{"Category"  :"Vodka","CategorySize"  :"90","BrandName"  :"Grey Goose","BrandPrice"  :"6","StockRemaining"  :"234","ShopId"  :"1"},{"Category"  :"Vodka","CategorySize"  :"180","BrandName"  :"Grey Goose","BrandPrice"  :"12","StockRemaining"  :"234","ShopId"  :"1"},{"Category"  :"Vodka","CategorySize"  :"375","BrandName"  :"Grey Goose","BrandPrice"  :"24","StockRemaining"  :"123","ShopId"  :"1"},{"Category"  :"Vodka","CategorySize"  :"750","BrandName"  :"Grey Goose","BrandPrice"  :"48","StockRemaining"  :"34","ShopId"  :"3"},{"Category"  :"Beer","CategorySize"  :"500","BrandName"  :"Coronna","BrandPrice"  :"3","StockRemaining"  :"4255","ShopId"  :"1"},{"Category"  :"Beer","CategorySize"  :"750","BrandName"  :"Coronna","BrandPrice"  :"6","StockRemaining"  :"4545","ShopId"  :"1"},{"Category"  :"Brandy","CategorySize"  :"60","BrandName"  :"Mansion House","BrandPrice"  :"2","StockRemaining"  :"123","ShopId"  :"2"},{"Category"  :"Brandy","CategorySize"  :"90","BrandName"  :"Mansion House","BrandPrice"  :"4","StockRemaining"  :"345656","ShopId"  :"3"},{"Category"  :"Brandy","CategorySize"  :"180","BrandName"  :"Mansion House","BrandPrice"  :"8","StockRemaining"  :"12","ShopId"  :"2"},{"Category"  :"Brandy","CategorySize"  :"375","BrandName"  :"Mansion House","BrandPrice"  :"16","StockRemaining"  :"56","ShopId"  :"2"},{"Category"  :"Brandy","CategorySize"  :"750","BrandName"  :"Mansion House","BrandPrice"  :"32","StockRemaining"  :"23","ShopId"  :"2"},{"Category"  :"Whiskey","CategorySize"  :"60","BrandName"  :"Royal Challenge","BrandPrice"  :"1","StockRemaining"  :"1","ShopId"  :"2"},{"Category"  :"Whiskey","CategorySize"  :"90","BrandName"  :"Royal Challenge","BrandPrice"  :"2","StockRemaining"  :"1234","ShopId"  :"2"},{"Category"  :"Whiskey","CategorySize"  :"180","BrandName"  :"Royal Challenge","BrandPrice"  :"4","StockRemaining"  :"234","ShopId"  :"2"},{"Category"  :"Whiskey","CategorySize"  :"375","BrandName"  :"Royal Challenge","BrandPrice"  :"8","StockRemaining"  :"2343","ShopId"  :"2"},{"Category"  :"Whiskey","CategorySize"  :"750","BrandName"  :"Royal Challenge","BrandPrice"  :"16","StockRemaining"  :"3434","ShopId"  :"2"},{"Category"  :"Vodka","CategorySize"  :"60","BrandName"  :"Grey Goose","BrandPrice"  :"3","StockRemaining"  :"2","ShopId"  :"2"},{"Category"  :"Vodka","CategorySize"  :"90","BrandName"  :"Grey Goose","BrandPrice"  :"6","StockRemaining"  :"67","ShopId"  :"2"},{"Category"  :"Vodka","CategorySize"  :"180","BrandName"  :"Grey Goose","BrandPrice"  :"12","StockRemaining"  :"234","ShopId"  :"2"},{"Category"  :"Vodka","CategorySize"  :"375","BrandName"  :"Grey Goose","BrandPrice"  :"24","StockRemaining"  :"678","ShopId"  :"2"},{"Category"  :"Vodka","CategorySize"  :"750","BrandName"  :"Grey Goose","BrandPrice"  :"48","StockRemaining"  :"47","ShopId"  :"2"},{"Category"  :"Beer","CategorySize"  :"500","BrandName"  :"Coronna","BrandPrice"  :"3","StockRemaining"  :"78","ShopId"  :"2"},{"Category"  :"Beer","CategorySize"  :"750","BrandName"  :"Coronna","BrandPrice"  :"6","StockRemaining"  :"677","ShopId"  :"2"}]
var customerInfo=[{"UserId"  :"dolly12","FirstName"  :"dolly","LastName"  :"bindra","EmailId"  :"jsmith@example.com","Password"  :"****123","ShopName"  :"Suryaprakash liquor stores","ShopId"  :"1"},{"UserId"  :"jpmdev012","FirstName"  :"steve","LastName"  :"roshe","EmailId"  :"hlowell@example.com","Password"  :"****avd","ShopName"  :"CSR liquor Stores","ShopId"  :"2"},{"UserId"  :"rahulchavan30","FirstName"  :"rahul","LastName"  :"Suryakanth","EmailId"  :"jsmith@example.com","Password"  :"****sds","ShopName"  :"Hanchock liquor","ShopId"  :"3"},{"UserId"  :"dmsummer12","FirstName"  :"ganapati","LastName"  :"Ramchandra","EmailId"  :"jsmith@example.com","Password"  :"****sdgf","ShopName"  :"BC liquor stores","ShopId"  :"4"}]
var billingInformation=[{"RoutingNumber"  :"999999989","AccountNumber"  :"00112233445454","BillingAddress1"  :"1035 southern artery","BillingAddress2"  :"Apt#306","City"  :"Quincy","State"  :"Ma","ZipCode"  :"02169","ShopId"  :"1"},{"RoutingNumber"  :"011054138","AccountNumber"  :"5469","BillingAddress1"  :"1035 southern artery","BillingAddress2"  :"Apt#306","City"  :"Quincy","State"  :"Ma","ZipCode"  :"02169","ShopId"  :"1"},{"RoutingNumber"  :"12345678","AccountNumber"  :"5478541236","BillingAddress1"  :"2000 crown colony drive","BillingAddress2"  :"","City"  :"Quincy","State"  :"Ma","ZipCode"  :"02169","ShopId"  :"2"},{"RoutingNumber"  :"74565548","AccountNumber"  :"1313","BillingAddress1"  :"1500 sparkman drive","BillingAddress2"  :"Apt#30b","City"  :"Hunstville","State"  :"AL","ZipCode"  :"35816","ShopId"  :"3"}]


var str='';

$.each(customerInfo,function(a,b){
		
	str += "<div class='userid' id='user_"+b.ShopId+"'>"+b.UserId+"</div>";
	str += "<div class='userinfo hidden' id='userinfo_"+b.ShopId+"'>"
	str += "<ul>"
		str += "<li>FirstName:"+b.FirstName+"</li>"
		str += "<li>LastName:"+b.LastName+"</li>"
		str += "<li>E-Mail:"+b.EmailId+"</li>"
		str += "<li class='buttonClick' id='user_"+b.ShopId+"'><button type='button'>Store Report</button></li>"
	str += "</ul>"
	str +="</div>";
})
$('#ownerInformation').html(str);

$('body').on('click','.userid',function(){
	
	$('.userinfo').addClass('hidden');
	var id=$(this).attr('id').split("_")[1];
	console.log(id)
	$('#userinfo_'+id).removeClass('hidden');


})

$('body').on('click','.buttonClick',function(){
	$('.userContainer').addClass('hidden');
	var id=$(this).attr('id').split("_")[1];
	$("#tableBody").data('id',id);
	
	var arr = $.grep(data, function( n, i ) {return (n.ShopId == id)});
	
	$('#shopContainer').removeClass('hidden')

	var str=""
$.each(arr,function(a,b){
	var identi=id+'_'+(b.BrandName).replace(/\s/g, '')+'_'+b.CategorySize
	str +="<tr class='"+identi+"'>"
   str +=" <th scope='row'><input class='inputChecked' type='checkbox' id='"+identi+"'></th>";
   str +=" <td>"+b.Category+"</td>";
   str +=" <td>"+b.CategorySize+"</td>";
   str +=" <td>"+b.BrandName+"</td>";
   str +=" <td>"+b.BrandPrice+"</td>";
   str +=" <td>"+b.StockRemaining+"</td>";
   str +=" <td></td>";
   

   });
$("#tableBody").html(str)
})

$('#goback').click(function(){
	$('#shopContainer').addClass('hidden')
	$('.userContainer').removeClass('hidden');



})

$("#delete").click(function(){
	$('.inputChecked').each(function(){
		if($(this).is(':checked')){
			var rowSelect=$(this).attr('id')
			$("."+rowSelect).remove();
		}
	})
});

$('body').on('click','#add',function(){	
	
var str=''
	str +="<tr class='rowToBeRemoved'>"
   	str +=" <th scope='row'><input class='inputChecked' type='checkbox'></th>";
   	str +=" <td><input type='text' class='brandType errorCheck' required></td>";
    str +=" <td><input type='number' class='brandSize errorCheck' required></td>";
   	str +=" <td><input type='text' class='brandName errorCheck' required></td>";
    str +=" <td><input type='number' class='brandPrice errorCheck' required></td>";
    str +=" <td><input type='number' class='brandStock errorCheck'required></td>";
    str +=" <td><button id='update' type='button'>Update</button></td>";

    $("#tableBody").append(str)

})	

$('body').on('click','#update',function(){	

	var requiredFilled =true;

	$('.errorCheck').each(function(){
		if($.trim($(this).val()) ==""){
			requiredFilled=false
		}

	})

if(requiredFilled){
			var id = $("#tableBody").data('id');
			var brandType=$('.brandType').val();
			var brandSize=$('.brandSize').val();
			var brandName=$('.brandName').val();
			var brandPrice=$('.brandPrice').val();
			var brandStock=$('.brandStock').val();
			var identi=id+'_'+brandName.replace(/\s/g, '')+'_'+brandSize;

			var exist =true;
			$('.inputChecked').each(function(){

				if(identi == $(this).attr('id')){
						exist=false;
				}
	

	
})

if(exist){
	var str='';
	str +="<tr class='"+identi+"'>"
   str +=" <th scope='row'><input class='inputChecked' type='checkbox' id='"+identi+"'></th>";
   str +=" <td>"+brandType+"</td>";
   str +=" <td>"+brandSize+"</td>";
   str +=" <td>"+brandName+"</td>";
   str +=" <td>"+brandPrice+"</td>";
   str +=" <td>"+brandStock+"</td>";
   str +=" <td></td>";
   $('.rowToBeRemoved').remove();
   $("#tableBody").append(str)
}else{
	alert('Item already exist ');
}

}else{
	alert('Please Fill All the required input fields')
}

})


});
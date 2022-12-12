import { query } from "./function.js";
import { makeHouseList } from "./parts.js";

const showResults = d => {
	$(".houselist").html(makeHouseList());
}

// query ({type:'animals_by_user_id'}).then(showResults);


$(()=>{
	$(".js-sort").on("change",function(e){
		(
			this.value==1 ? query({type:'sort_animal',column:'date_create',dir:'DESC'}) :
			this.value==2 ? query({type:'sort_animal',column:'date_create',dir:'ASC'}) :
			query({
				type:'animals_by_user_id',
				params:[sessionStorage.userId]
			})
		).then(showResults);
	})

})

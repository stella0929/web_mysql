/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/ 
var Schema = {};
var TolietSchema;

Schema.createSchema = function(mongoose){
	console.log('createSchema 호출됨');
	TolietSchema = mongoose.Schema({
		tolietName: {type:String, required:true,'default':''},
		stallNumber: {type:Number, required: true,'default':-1},
		safety: {type: String, 'default':''}//name으로 검색을 하겠다.(index)
		,updated_at:{type:Date, index:{unique:false}, 'default':Date.now()}
	});
	console.log('TolietSchema 정의함.');


	//모델 객체에서 사용할 수 있는 함수 등록.
	TolietSchema.static('findByTolietName',function(tolietName, callback){
		return this.find({tolietName:tolietName},callback);
	});


	TolietSchema.static('findByStallNumber',function(stallNumber,callback){
		return this.find({stallNumber:stallNumber},callback);
	});
		
	return TolietSchema;
}
module.exports = Schema;
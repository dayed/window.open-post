/**
 * window.open 使用post方式传参
 * @param  {String} url post的目标链接
 * @param  {String} key post传递的name
 * @param  {String} val post传递的value
 * @require jquery
 * @example: 
 * windowOpenWithPost("/excel.php", "data", "[{title:1}]");
 */
function windowOpenWithPost(url, key, val) {
	var form = $("<form>", {
		method: "POST",
		action: url,
		target: url
	});

	var input = $("<input>", {
		type: "hidden",
		name: key,
		value: val
	});

	$("body").append(form);

	form.append(input).trigger("submit").remove();
}

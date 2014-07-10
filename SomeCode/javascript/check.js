//////////////////////------//////////////////////
//////////////////////整数部分//////////////////////
/*
 * 纯粹整数（123）
 */
function checkInt(foo) {
	var re = /^\d+$/g;
	return re.test(foo);
}

/*
 * 正整数（+123|123）
 */
function checkPositiveInt(foo) {
	var re = /^\+?\d+$/g;
	return re.test(foo);
}

/*
 * 负整数（-123）
 */
function checkNegativeInt(foo) {
	var re = /^-{1}\d+$/g;
	return re.test(foo);
}

// ////////////////////------//////////////////////
// ////////////////////纯小数部分//////////////////////
/*
 * 纯粹小数类型
 */
function checkFloat(foo) {
	try {
		return checkFloatDigits(foo);
	} catch (e) {
		throw e;
	}
}

/*
 * 纯粹小数类型（默认为2位小数，111.00）
 */
function checkFloat2(foo) {
	try {
		return checkFloatDigits(foo, 2);
	} catch (e) {
		throw e;
	}
}

/*
 * 纯粹小数类型（默认为4位小数，111.0000）
 */
function checkFloat4(foo) {
	try {
		return checkFloatDigits(foo, 4);
	} catch (e) {
		throw e;
	}
}

/*
 * 纯粹小数类型（默认为4位小数，111.0000）
 */
function checkFloat4or2(foo) {
	try {
		return checkFloatDigits(foo, 42);
	} catch (e) {
		throw e;
	}
}

/*
 * 纯粹小数类型（digits为小数位数(2|4)，111.00）
 */
function checkFloatDigits(foo, digits) {
	var re_2 = /^\d+\.{1}\d{2}$/g;
	var re_4 = /^\d+\.{1}\d{4}$/g;
	var re_42 = /^\d+\.{1}\d{2}$|^\d+\.{1}\d{4}$/g;
	var re = /^\d+\.{1}\d+$/g;
	if (digits == 2) {
		re = re_2;
	} else if (digits == 4) {
		re = re_4;
	} else if (digits == 42) {
		re = re_42;
	} else {
		if (digits != null) {
			throw new ceError("001", "Error parameter : digits.",
					"参数错误：digits参数取值错误。");
		}
	}
	return re.test(foo);
}

// ////////////////////正小数部分//////////////////////
/*
 * 纯粹正小数类型
 */
function checkPositiveFloat(foo) {
	try {
		return checkPositiveFloatDigits(foo);
	} catch (e) {
		throw e;
	}
}

/*
 * 纯粹正小数类型（默认为2位小数，+111.0000|111.0000）
 */
function checkPositiveFloat2(foo) {
	try {
		return checkPositiveFloatDigits(foo, 2);
	} catch (e) {
		throw e;
	}
}

/*
 * 纯粹正小数类型（默认为4位小数，+111.0000|111.0000）
 */
function checkPositiveFloat4(foo) {
	try {
		return checkPositiveFloatDigits(foo, 4);
	} catch (e) {
		throw e;
	}
}

/*
 * 纯粹正小数类型（默认为4位小数，+111.0000|111.0000）
 */
function checkPositiveFloat4or2(foo) {
	try {
		return checkPositiveFloatDigits(foo, 42);
	} catch (e) {
		throw e;
	}
}

/*
 * 纯粹正小数类型（digits为小数位数(2|4)，+111.00|111.00）
 */
function checkPositiveFloatDigits(foo, digits) {
	var re_2 = /^\+?\d+\.{1}\d{2}$/g;
	var re_4 = /^\+?\d+\.{1}\d{4}$/g;
	var re_42 = /^\+?\d+\.{1}\d{2}$|^\+?\d+\.{1}\d{4}$/g;
	var re = /^\+?\d+\.{1}\d+$/g;
	if (digits == 2) {
		re = re_2;
	} else if (digits == 4) {
		re = re_4;
	} else if (digits == 42) {
		re = re_42;
	} else {
		if (digits != null) {
			throw new ceError("001", "Error parameter : digits.",
					"参数错误：digits参数取值错误。");
		}
	}
	return re.test(foo);
}

// ////////////////////负小数部分//////////////////////
/*
 * 纯粹负小数类型（-111.0~0）
 */
function checkNegativeFloat(foo) {
	try {
		return checkNegativeFloatDigits(foo);
	} catch (e) {
		throw e;
	}
}

/*
 * 纯粹负小数类型（默认为2位小数，-111.00）
 */
function checkNegativeFloat2(foo) {
	try {
		return checkNegativeFloatDigits(foo, 2);
	} catch (e) {
		throw e;
	}
}

/*
 * 纯粹负小数类型（默认为4位小数，-111.0000）
 */
function checkNegativeFloat4(foo) {
	try {
		return checkNegativeFloatDigits(foo, 4);
	} catch (e) {
		throw e;
	}
}
/*
 * 纯粹负小数类型（默认为4位小数，-111.0000）
 */
function checkNegativeFloat4or2(foo) {
	try {
		return checkNegativeFloatDigits(foo, 42);
	} catch (e) {
		throw e;
	}
}
/*
 * 纯粹负小数类型（digits为小数位数(2|4)，-111.00）
 */
function checkNegativeFloatDigits(foo, digits) {
	var re_2 = /^-{1}\d+\.{1}\d{2}$/g;
	var re_4 = /^-{1}\d+\.{1}\d{4}$/g;
	var re_42 = /^-{1}\d+\.{1}\d{2}$|^-{1}\d+\.{1}\d{4}$/g;
	var re = /^-{1}\d+\.{1}\d+$/g;
	if (digits == 2) {
		re = re_2;
	} else if (digits == 4) {
		re = re_4;
	} else if (digits == 42) {
		re = re_42;
	} else {
		if (digits != null) {
			throw new ceError("001", "Error parameter : digits.",
					"参数错误：digits参数取值错误。");
		}
	}
	return re.test(foo);
}

// ////////////////////------//////////////////////
// ////////////////////纯粹字符//////////////////////
/*
 * 纯粹字符测试
 */
function checkChar(foo) {
	var re = /^-{1}\d+$/g;
	return re.text(foo);
}

function checkENChar() {

}

function checkCNChar() {

}

// ////////////////////------//////////////////////
// ////////////////////测试部分//////////////////////
function checkCheckJs() {
	var testFunction = document.getElementById("testFunction").value;
	var tester = document.getElementById("tester").value;
	try {
		eval("alert(" + testFunction
				+ "(tester)?'方法返回\\n  【真】':'方法返回\\n  【假】')");
	} catch (e) {
		var ceCode = /^CE_CODE{\d+}/g.exec(e.message);
		if (ceCode) {
			alert((/CE_CN_DESC{[\S\s]+}/g.exec(e.message) + "").replace(
					/^CE_CN_DESC{/g, "").replace(/}$/g, ""));
		} else {
			alert("出错了：\n" + " 方法没调到，可能有错或者还没写。");
		}
	}
}
function selectFunction() {
	var t = document.getElementById('list');
	document.getElementById('testFunction').value = t.value;
}

function ceError(code, enDesc, cnDesc) {
	return new Error("CE_CODE{" + code + "},CE_EN_DESC{" + enDesc
			+ "},CE_CN_DESC{" + cnDesc + "}");
}
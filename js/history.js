(function(window) {
	/**
	 * selector 搜索框外包元素，大小与搜索框大小一致
	 * input 搜索框元素
	 * options 基本配置
	 * 
	 * 依赖jquery 3.1.1
	 * 
	 * time：2019-03-08
	 */
	
	window.Hostory = function (selector, input, options) {
		var that = this;
		that.name = selector; //搜索框外包元素（必须填）
		that.searchInp = input; //input搜索框（必须填）
		that.height = options.height || 28; //高
		that.width = options.width || 150; //宽
		that.radius = options.radius || 5; //圆角
		that.searchBtn = options.searchBtn; //搜索按钮（必须填）

		//设置初始值
		$(that.searchInp).css({
			width: that.width,
			height: that.height,
			"border-radius": that.radius
		})

		that.createHistoryBox = function() {
			var el = document.querySelector(that.name);
			el.style.position = "relative"; //设置绝对定位

			var $div = $("<div class='history_box'>");
			$div.css('width', that.width);

			$(that.name).append($div) //创建历史记录容量器)
		}

		that.createHistoryBox();

		//展开历史记录容量器
		$(that.searchInp).on("focus", function() {
			$historyBox = $(".history_box");
			$historyBox.html("");
			//是否存放过历史记录
			if (localStorage.historyList) {
				var list = JSON.parse(localStorage.historyList);
				$.each(list, function(index, item) {
					var p = $("<p>");
					p.text(item);
					$historyBox.append(p);
				})
			}
			$historyBox.slideDown(250); //展示动画
		});

		//收起历史记录容量器
		$(that.searchInp).on("blur", function() {
			$(".history_box").slideUp(250); //收起动画
		});

		//获取input的值
		that.inputVal = function() {
			return $(that.searchInp).val().trim();
		}

		//点击搜索
		$(that.searchBtn).click(function() {
			var val = that.inputVal(); //获取值

			if (val !== "" || val !== null) {
				if (localStorage.historyList) { //判断是否存在历史记录,否则创建,存放历史记录列表
					var localList = JSON.parse(localStorage.historyList);
					//如果存放条数超哥50,则删除最后一条
					if (localList.length >= 30) {
						localList.pop();
						localList.unshift(val);
					} else {
						localList.unshift(val);
					}

					//存放到本地
					localStorage.historyList = JSON.stringify(localList);
				} else {
					localStorage.historyList = JSON.stringify([val]);
				}
			}
		})

		//选中历史记录
		$(that.name).on("click", ".history_box p", function() {
			var txt = $(this).text().trim();
			$(that.searchInp).val(txt);
		});
	}
})(window)

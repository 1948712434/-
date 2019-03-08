＃本地存储历史记录插件（依赖jquery.3.3.1.js）
##快速使用：（请修改相关文件路径）
1、导入css:
<link rel="stylesheet" href="css/history.css" />
2、导入JQ：
<script src="js/jq-3-3-1.js"></script>
3、导入history.js：
<script src="js/history.js"></script>
4、初始化：

var myHistory = new Hostory("#demo", "#search", {
				searchBtn: "#search_btn",(必填)
				width: 300,
				radius:5
			});
      
 其中  #demo  => 是搜索的外包元素
       #search  => 是搜索元素
       { } => 是基本配置
       
       
 
 ###基本配置项说明:
 searchBtn：搜索按钮
 width:是搜索框的宽度也是历史列表的宽度
 height：是搜索框的高度
 radius：是搜索框的圆角
 
 

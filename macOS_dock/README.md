# css部分

```css
    html {
          font-size: 15px;
        }

    body {
      margin: 0;
      padding: 0;
      display: flex;
      width: 100%;
      min-height: 100vh;
      overflow: hidden;
      align-items: flex-end; //让项目处于下方
    }

    li {
      list-style: none;
    }
		
    .glass {
      width: 100%;
      height: 8rem;
      background: #eee;
      display: flex;
      justify-content: center;
    }

     .dock {
       (缩放变量 记得添加) 
       --scale:1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

     .dock li {
         //应用
      font-size: calc(6rem * var(--scale));
      padding: 0 0.5rem;
      	//高度也要改变来适用放大
         position: relative;
      top: calc((6rem * var(--scale) - 6rem) / 2 * -1);
         //过渡
         transition: 15ms all ease-out;
    }

```

# 动画部分

## 动画原理：

 当我们游标移动到 第4个图标上，它会放大。此外，第3个和第5个会稍微放大一点,

游标离第3个近，第3个会比第5个大一点。反之亦然。

所以我们要直到游标处于偏左，中间，还是偏右的位置。

# js部分

## 步骤：

获取列表节点

添加click监听  ---》 加载动画效果

添加mousemove监听---》根据鼠标位置计算缩放大小

离开还原



```js
//获取nodeList
var list = document.querySelectorAll(".dock li")
//添加绑定事件
list.forEach(v=>{
      /* 添加点击图标动画 上下动*/
      v.addEventListener('click', (e) => {
        e.currentTarget.classList.add('loading')
        console.log("?");
      })
    v.addEventListener('mousemove',(e)=>{
        var item=e.target
        let itemRect =item.getBoundingClientRect()
        //鼠标在当前元素框内相对位置0~1  0接近左边
        var offset= (item.clientX-itemRect.left)/itemRect.width
        var prev=v.previousElementSibling || null
        var next=v.nextElementSibling || null
    	//增大的放大倍数
        let scale=0.6
        resetScale()
        if(prev){
            //左边 要做相反操作   所以offset-1  
            prev.style.setProperty('--scale',1+scale*Math.abs(offset-1))
        }
        //中间 正常扩大
        v.style.setProperty('--scale',1+scale)
        //右边 正常逻辑：越靠近越大
        if(next){
           next.style.setProperty('--scale',1+scale*offset)  
        }
        })
})

//鼠标离开后 放大还原
	document.queryselector('.dock').addEventListener('mouseleave',(e)=>{
    resetScale()    
    })

//还原函数
function resetScale(){
    document.querySelectorAll(".dock li").forEach(li => {
        li.style.setProperty('--scale', 1)
      })
}
```

# 实现效果：

![img](https://github.com/hxh-ly/css-wheel/blob/main/image/macOS_dock.gif)

每天一个小轮子

- 骨架屏

![img](https://github.com/hxh-ly/css-wheel/blob/main/image/skeleton.gif)
```css
.loading .image,
    .loading h4,
    .loading .description {
      background-color: var(--loading-grey);
      /* 光束其实就是一条渐变而已 */
      background: linear-gradient(100deg, rgba(255, 255, 255, 0) 40%,
          rgba(255, 255, 255, .5) 50%, rgba(255, 255, 255, 0) 60%) var(--loading-grey);
      /* 基于容器计算  默认100% 100% 此时设置postion:就不生效了 */    
      background-size: 200% 100%;
      /* percent = (w-bw)* percent */
      background-position-x: 180%;
      animation: loading 1s ease-in-out infinite;
    }

    .loading h4 {
      min-height: 1.6rem;
      border-radius: 4px;
      /* 因为比较短，延迟一会再执行，方便同步 */
      animation-delay: 0.05s;
    }

    .loading .description {
      min-height: 4rem;
      border-radius: 4px;
      /* 因为比较短，延迟一会再执行，方便同步 */
      animation-delay: 0.06s; 
    }

    @keyframes loading {
      to {
        background-position-x: -20%;
      }
    }
```
- 模仿macOS_dock

![img](https://github.com/hxh-ly/css-wheel/blob/main/image/macOS_dock.gif)

- 遮罩层

![img](https://github.com/hxh-ly/css-wheel/blob/main/image/over_screen.gif)






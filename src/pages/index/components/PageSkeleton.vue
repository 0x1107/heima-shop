
<!--
此文件为开发者工具生成，生成时间: 2023/8/14下午9:34:29
使用方法：
在 /Users/fanxiaobing/HBuilderProjects/erabbit-uni-app-vue3-ts/dist/dev/mp-weixin/pages/index/index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 /Users/fanxiaobing/HBuilderProjects/erabbit-uni-app-vue3-ts/dist/dev/mp-weixin/pages/index/index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
    <scroll-view scroll-y="true" class="scroll-view" refresher-enabled="true" enable-back-to-top="true">
        <view is="components/XtxSwiper">
            <view class="carousel XtxSwiper--carousel">
                <swiper circular="true" interval="3000" current="0" autoplay="false">
                    <swiper-item
                        style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                        <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                            <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                        </navigator>
                    </swiper-item>
                </swiper>
                <view class="indicator XtxSwiper--indicator">
                    <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                    <text class="dot XtxSwiper--dot"></text>
                    <text class="dot XtxSwiper--dot"></text>
                    <text class="dot XtxSwiper--dot"></text>
                    <text class="dot XtxSwiper--dot"></text>
                </view>
            </view>
        </view>
        <view is="pages/index/components/CategoryPanel">
            <view class="category CategoryPanel--category">
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-572 sk-text">居家</text>
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-164 sk-text">锦鲤</text>
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-753 sk-text">服饰</text>
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-164 sk-text">母婴</text>
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-303 sk-text">个护</text>
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-384 sk-text">严选</text>
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-588 sk-text">数码</text>
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-725 sk-text">运动</text>
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-710 sk-text">杂项</text>
                </navigator>
                <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                    <image class="icon CategoryPanel--icon sk-image"></image>
                    <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-839 sk-text">品牌</text>
                </navigator>
            </view>
        </view>
        <view is="pages/index/components/HotPannel">
            <view class="panel HotPannel--panel hot HotPannel--hot">
                <view class="item HotPannel--item">
                    <view class="title HotPannel--title">
                        <text
                            class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-643 sk-text">特惠推荐</text>
                        <text
                            class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-370 sk-text">精选全攻略</text>
                    </view>
                    <navigator class="cards HotPannel--cards" hover-class="none">
                        <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                        <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                    </navigator>
                </view>
                <view class="item HotPannel--item">
                    <view class="title HotPannel--title">
                        <text
                            class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-903 sk-text">爆款推荐</text>
                        <text
                            class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-763 sk-text">最受欢迎</text>
                    </view>
                    <navigator class="cards HotPannel--cards" hover-class="none">
                        <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                        <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                    </navigator>
                </view>
                <view class="item HotPannel--item">
                    <view class="title HotPannel--title">
                        <text
                            class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-859 sk-text">一站买全</text>
                        <text
                            class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-542 sk-text">精心优选</text>
                    </view>
                    <navigator class="cards HotPannel--cards" hover-class="none">
                        <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                        <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                    </navigator>
                </view>
                <view class="item HotPannel--item">
                    <view class="title HotPannel--title">
                        <text
                            class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-763 sk-text">新鲜好物</text>
                        <text
                            class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-15 sk-text">生活加分项</text>
                    </view>
                    <navigator class="cards HotPannel--cards" hover-class="none">
                        <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                        <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
                    </navigator>
                </view>
            </view>
        </view>
        <view is="components/XtxGuess" class="r">
            <view class="caption XtxGuess--caption">
                <text
                    class="text XtxGuess--text sk-transparent sk-text-0-0000-431 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
            </view>
            <view class="guess XtxGuess--guess">
                <navigator class="guess-item XtxGuess--guess-item">
                    <image class="image XtxGuess--image sk-image" mode="aspectFill"></image>
                </navigator>
                <navigator class="guess-item XtxGuess--guess-item">
                    <image class="image XtxGuess--image sk-image" mode="aspectFill"></image>
                </navigator>
            </view>
        </view>
    </scroll-view>
</template>

<style>
/*
此文件为开发者工具生成，生成时间: 2023/8/14下午9:34:29

在 /Users/fanxiaobing/HBuilderProjects/erabbit-uni-app-vue3-ts/dist/dev/mp-weixin/pages/index/index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
    color: transparent !important;
}

.sk-text-14-2857-572 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-164 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-753 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-303 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-384 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-588 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-725 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-710 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-839 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-643 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-370 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-903 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-763 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-859 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-542 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-15 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-0-0000-431 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 32.0000rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}
</style>
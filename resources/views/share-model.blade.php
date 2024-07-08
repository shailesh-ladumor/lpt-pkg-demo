<div class="modal fade share-model" id="shareModel" role="dialog">

    <div class="modal-dialog modal-lg share-model__dialog">
        <div class="modal-content">
            <div class="modal-body share-model__dialog-body">
                <div class="share-model__btn-close" id="share-model__btn-close">
                    <x-lpt-icon name="close"></x-lpt-icon>
                </div>
                <div class="share-model__share-box">
                    <x-lpt-icon name="share"></x-lpt-icon>
                </div>
                <div class="share-model__title">
                    Share this page
                </div>
                <div class="social-share share-model__twitter" onclick="share('twitter')">
                    <x-lpt-icon name="twitter"></x-lpt-icon>
                    <div class="share-model__twitter-text">
                        Share on <span>Twitter</span>
                    </div>
                </div>
                <div class="social-share share-model__facebook" onclick="share('facebook')">
                    <x-lpt-icon name="facebook"></x-lpt-icon>
                    <div class="share share-model__facebook-text">
                        Share on <span>Facebook</span>
                    </div>
                </div>
                <div class="share-model__copy" onclick="copyToClipboard()">
                    <x-lpt-icon name="copy"></x-lpt-icon>
                    <div id="copyUrl"
                         class="share-model__copy-text">
                        Copy URL
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    function copyToClipboard(){
        const input = document.body.appendChild(document.createElement("input"));
        input.value = window.location.href;
        input.select();
        document.execCommand('copy');
        input.parentNode.removeChild(input);
        
        $('#copyUrl').text('copied!');
        setTimeout(()=>{
            $('#copyUrl').text('Copy URL');
        }, 3000)
    }

    function share(social) {
        const networks = {
            facebook: "https://www.facebook.com/sharer/sharer.php?u={{urlencode(url()->current())}}&quote=wel laravel tutorial",
            twitter: "https://x.com/intent/tweet?text=Laravel Package tutorial&url={{urlencode(url()->current())}}&via=LPT",
        };
        const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
        const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

        const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        const systemZoom = width / window.screen.availWidth;
        const left = (width - 600) / 2 / systemZoom + dualScreenLeft
        const top = (height - 300) / 2 / systemZoom + dualScreenTop
        const options= 'menubar=no,toolbar=no,width=600,height=300,top='+ top+', left='+ left;
        window.open(networks[social], '', options)
    }
</script>

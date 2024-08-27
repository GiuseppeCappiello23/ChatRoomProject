<script>
    export let username
    export let time
    export let text
</script>

<div class="chat chat-start">
	<div class="chat-image avatar">
		<div class="w-10 rounded-full">
			<img
				alt="Tailwind CSS chat bubble component"
				src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
			/>
		</div>
	</div>
	<div class="chat-header">
		{username}
		<time class="text-xs opacity-50">{time}</time>
	</div>
	<div class="chat-bubble">{text}</div>
</div>

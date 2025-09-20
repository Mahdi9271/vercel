document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const message = this.message.value.trim();
  const msg = document.getElementById('formMsg');

  if(!name || !phone || !message){
    msg.textContent = 'لطفاً همهٔ فیلدها را پر کنید.';
    msg.style.color = 'crimson';
    return;
  }

  msg.style.color = 'green';
  msg.textContent = 'پیام شما با موفقیت ثبت شد. به زودی با شما تماس می‌گیریم.';
  this.reset();
});
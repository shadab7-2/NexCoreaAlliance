let fetchBtn = document.getElementById("fetchBtn");
let user_info = document.getElementById("user-info");
let loading = document.getElementById("loading");

async function fetchUserData() {
   
  try {
    loading.textContent = "fetching user data . ";
    user_info.textContent = "";
    
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();

    user_info.innerHTML = `
      <h3>${data.name}</h3>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>City:</strong> ${data.address.city}</p>
    `;
  } catch (error) {
    user_info.innerHTML = `<p style="color:red;">❌ Error fetching data: ${error.message}</p>`;
  } finally {
    loading.textContent = "";
  }
}
fetchBtn.addEventListener('click', fetchUserData);
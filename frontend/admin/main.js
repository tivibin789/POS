document.addEventListener("DOMContentLoaded", () => {
  const tabLinks = document.querySelectorAll(".tab-link");
  const sections = document.querySelectorAll(".hidden");

  tabLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Xóa class 'show' khỏi tất cả các section
      sections.forEach((s) => s.classList.remove("show"));

      // Lấy id từ thuộc tính href của link và chọn section tương ứng
      const id = link.getAttribute("href");
      const section = document.querySelector(id);

      // Thêm class 'show' vào section được nhấp vào
      section.classList.add("show");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các dòng trong bảng
  const rows = document.querySelectorAll("table tbody tr");

  // Biến để lưu trữ ID của dòng được chọn
  let selectedRowId = null;

  // Lặp qua từng dòng và thêm sự kiện click
  rows.forEach(function (row) {
    row.addEventListener("click", function () {
      // Xóa lớp 'selected' khỏi tất cả các dòng
      rows.forEach(function (r) {
        r.classList.remove("selected");
      });

      // Thêm lớp 'selected' vào dòng được click
      row.classList.add("selected");

      // Lấy ID từ thuộc tính data-id (nếu có) hoặc từ cột cụ thể
      selectedRowId = row.cells[1].innerText; // Giả sử ID nằm ở cột thứ 2
      console.log("Dòng được chọn có ID:", selectedRowId);
    });
  });
});
//dialog quan ly nhan vien
document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll("#quan-ly-nhan-vien table tbody tr");
  const editDialog = document.getElementById("edit-dialog");
  const overlay = document.getElementById("overlay");
  let selectedRow = null;

  // Gắn sự kiện click cho từng dòng trong bảng
  rows.forEach(function (row) {
    row.addEventListener("click", function () {
      rows.forEach(function (r) {
        r.classList.remove("selected");
      });
      row.classList.add("selected");
      selectedRow = row;
    });
  });

  // Hiển thị hộp thoại khi nhấn nút Sửa
  document
    .getElementById("btn-edit-nhan-vien")
    .addEventListener("click", function () {
      if (!selectedRow) {
        alert("Vui lòng chọn một dòng để sửa.");
        return;
      }

      // Lấy dữ liệu từ dòng được chọn
      const cells = selectedRow.querySelectorAll("td");
      document.getElementById("edit-ma-nv").value = cells[1].innerText;
      document.getElementById("edit-ho-ten").value = cells[2].innerText;
      document.getElementById("edit-ngay-sinh").value = cells[3].innerText;
      document.getElementById("edit-dia-chi").value = cells[4].innerText;
      document.getElementById("edit-sdt").value = cells[5].innerText;
      document.getElementById("edit-cccd").value = cells[6].innerText;
      document.getElementById("edit-chuc-vu").value = cells[7].innerText;

      // Debug: kiểm tra xem có được đến đây không
      console.log("Dữ liệu đã được lấy và hộp thoại sẽ được hiển thị.");

      // Hiển thị hộp thoại và overlay
      editDialog.classList.add("show");
      overlay.classList.add("show");
    });

  // Đóng hộp thoại khi nhấn Hủy
  document.getElementById("btn-cancel").addEventListener("click", function () {
    editDialog.classList.remove("show");
    overlay.classList.remove("show");
  });

  // Đóng hộp thoại nếu người dùng click vào màn hình mờ (overlay)
  overlay.addEventListener("click", function () {
    editDialog.classList.remove("show");
    overlay.classList.remove("show");
  });
});
//dialog sua doanh thu

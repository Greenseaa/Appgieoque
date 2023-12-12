/* Trong gieoque.js */

document.addEventListener('DOMContentLoaded', function () {
    var btnGieoQue = document.getElementById('btnGieoQue');
    var ketQuaGieoQue = document.getElementById('ketQuaGieoQue');
    var backgroundMusic = document.getElementById('backgroundMusic');

    btnGieoQue.addEventListener('click', function () {
        var queArray = [
            "Sự Kiên Trì (忍): Sự kiên trì và nỗ lực của bạn sẽ được đền đáp; hãy tiếp tục hành trình học tập với lòng tin và sẽ có thành công.",
            "Sự Sáng Tạo (創): Tài năng sáng tạo của bạn sẽ tỏa sáng trong kỳ thi, giúp bạn tìm ra cách giải quyết các vấn đề khó khăn.",
            "Hòa Thuận (和): Sự hòa thuận và tương tác tích cực với người khác sẽ tạo nên một môi trường học tập lý tưởng, giúp bạn dễ dàng học hỏi.",
            "Sự Linh Hoạt (靈): Khả năng thích ứng của bạn giống như nước chảy linh hoạt, đưa bạn qua mọi thách thức trong kỳ thi.",
            "Điều Tốt Đẹp (調): Mọi thứ đều đang điều chỉnh tốt đẹp, đặt bạn vào vị trí thuận lợi để đạt được kết quả cao trong thi cử.",
            "Sự Tập Trung (專): Sự tập trung cao độ sẽ giúp bạn vượt qua mọi khó khăn, tập trung vào mục tiêu và đạt được thành công.",
            "Sự Đoàn Kết (協): Sự đoàn kết với bạn bè và người thân sẽ là nguồn động viên mạnh mẽ, giúp bạn vượt qua những thử thách trong kỳ thi.",
            "Sự Tự Tin (信): Tự tin và lòng tin vào khả năng của bản thân sẽ là nguồn động viên lớn, giúp bạn tỏa sáng trong kỳ thi.",
            "Sự Hiểu Biết (悟): Khả năng hiểu biết sâu sắc về kiến thức sẽ là chìa khóa mở cánh cửa cho thành công trong bài thi của bạn.",
            "Sự Tương Tác (互): Sự tương tác tích cực với giáo viên và đồng học sẽ mang lại sự hiểu biết sâu sắc và hỗ trợ cho hành trình học tập của bạn."
        ];

        var randomIndex = Math.floor(Math.random() * queArray.length);
        var randomQue = queArray[randomIndex];

        // Hiển thị kết quả với phần tử span để điều chỉnh CSS dễ dàng hơn
        ketQuaGieoQue.innerHTML = '<span>Kết quả: ' + randomQue + '</span>';
    });

    // Mở âm thanh nền khi trang web được tải
    backgroundMusic.play();
});

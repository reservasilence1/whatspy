$(document).ready(function () {
	/*--------------------------------------------------------------
	SEARCHBAR START
	--------------------------------------------------------------*/
	var sp = document.querySelector(".iconbox-search");
	var searchbar = document.querySelector(".iconbox-searchbar");
	var shclose = document.querySelector(".search-close");

	function changeClass() {
		searchbar.classList.add("search-visible");
	}

	function closesearch() {
		searchbar.classList.remove("search-visible");
	}
	sp.addEventListener("click", changeClass);
	shclose.addEventListener("click", closesearch);
	/*--------------------------------------------------------------
	SEARCHBAR END
	--------------------------------------------------------------*/

	/*--------------------------------------------------------------
	TOOLTIP START
	--------------------------------------------------------------*/
	$('[data-toggle="tooltip"]').tooltip();
	/*--------------------------------------------------------------
	TOOLTIP END
	--------------------------------------------------------------*/

	/*--------------------------------------------------------------
	CAROUSAL START
	--------------------------------------------------------------*/
	$(".owl-carousel").owlCarousel({
		loop: false,
		margin: 2,
		nav: false,
		items: 4,
	});
	/*--------------------------------------------------------------
	CAROUSAL END
	--------------------------------------------------------------*/

	/*--------------------------------------------------------------
	PERFECT SCROLLBAR START
	--------------------------------------------------------------*/
	var selectors = [
		".sidebar-userlist",
		".sidebar-contactlist",
		".conversation-panel__body",
		".information-panel__body",
		".ca-call-details-history",
		".ca-content__contactstab",
		".modal-contact-list",
		".profile-settings-list",
	];
	selectors.forEach(function (selector) {
		$(selector).each(function () {
			const ps = new PerfectScrollbar($(this)[0], {
				suppressScrollX: true,
			});
			ps.isRtl = false;
			ps.update();
		});
	});
	/*--------------------------------------------------------------
	PERFECT SCROLLBAR END
	--------------------------------------------------------------*/

	/*--------------------------------------------------------------
	INFORMATION PANEL START
	--------------------------------------------------------------*/

	$(".personalinfo-panel-opener").on("click", function () {
		$("body").addClass("info-panel-opened");
		$(".backdrop-overlay").removeClass("hidden");
		$(".theme-customizer").removeClass("active");
	});
	$(".groupinfo-panel-opener").on("click", function () {
		$("body").addClass("info-panel-opened");
		$(".backdrop-overlay").removeClass("hidden");
	});
	$(".information-panel__closer").on("click", function () {
		$("body").removeClass("info-panel-opened");
		$(".backdrop-overlay").addClass("hidden");
	});
	/*--------------------------------------------------------------
	INFORMATION PANEL END
	--------------------------------------------------------------*/

	/*--------------------------------------------------------------
	SETTINGS PANEL START
	--------------------------------------------------------------*/

	$(function () {
		var $window = $(window),
			$body = $(".settings-nav-menu .nav .nav-link");

		function resize() {
			if ($window.width() < 768) {
				return $body.removeClass("active");
			}
		}

		$window.resize(resize).trigger("resize");
	});
	/*--------------------------------------------------------------
	SETTINGS PANEL END
	--------------------------------------------------------------*/

	/*--------------------------------------------------------------
	MODAL START
	--------------------------------------------------------------*/
	$(".dialpad-opener").on("click", function () {
		$(".modal-contact-list").toggle();
		$(".modal-dialpad").toggle();
		$(this)
			.find(".mdi")
			.toggleClass("mdi-dialpad mdi-account-multiple-outline");
	});
	$(".new-group-dialog .iconbox").on("click", function () {
		$(this).toggleClass("btn-solid-info btn-solid-success");
		$(this).find(".iconbox__icon").toggleClass("mdi-plus mdi-check");
	});
	/*--------------------------------------------------------------
	MODAL END
	--------------------------------------------------------------*/

	/*--------------------------------------------------------------
	DEMO CHAT JQUERY START
	--------------------------------------------------------------*/

	//chats Tab Inside
	$("#caChatsTab").on("click", function () {
		$(".ca-content__callstab, .ca-content__contactstab").hide();
		$(".ca-content__chatstab").show();
	});

	$("#personal-chat-tab").on("click", function () {
		if ($("#personal-chat .conversation").hasClass("active")) {
			$(".ca-content__chatstab--group").hide();
			$(".ca-content__chatstab--personal--home").show();
			$(".ca-content__chatstab--personal--new-chat").hide();
			$(".ca-content__chatstab--personal").hide();
		} else {
			$(".ca-content__chatstab--personal, .ca-content__chatstab--group").hide();
		}
	});
	$("#groups-chat-tab").on("click", function () {
		if ($("#groups-chat .conversation").hasClass("active")) {
			$(".ca-content__chatstab--group").hide();
			$(".ca-content__chatstab--personal--home").show();
			$(".ca-content__chatstab--personal--new-chat").hide();
			$(".ca-content__chatstab--personal").hide();
		} else {
			$(".ca-content__chatstab--personal, .ca-content__chatstab--group").hide();
		}
	});

	//Calls Tab Inside
	$("#caCallsTab").on("click", function () {
		$(".ca-content__chatstab, .ca-content__contactstab").hide();
		if ($(".calllist").hasClass("active")) {
			$(".ca-content__callstab").show();
		} else {
			$(".ca-content__callstab").hide();
		}
	});

	// Contacts Tab Inside
	$("#caContactsTab").on("click", function () {
		$(".ca-content__chatstab, .ca-content__callstab").hide();
		if ($(".contactlist").hasClass("active")) {
			$(".ca-content__contactstab").show();
		} else {
			$(".ca-content__contactstab").hide();
		}
	});

	/*--------------------------------------------------------------
	DEMO CHAT JQUERY END
	--------------------------------------------------------------*/

	/*--------------------------------------------------------------
	 RESPONSIVE START
	--------------------------------------------------------------*/

	$(function () {
		var $window = $(window),
			$body = $("body");

		function resize() {
			if ($window.width() < 992) {
				$(".conversation, .calllist, .contactlist").removeClass("active");
				$("#personal-chat .conversation").on("click", function () {
					$(this).addClass("active");
					$(".ca-content__chatstab--personal").show();
					$(".ca-content__chatstab--personal--home").hide();
					$(".ca-content__chatstab--personal--new-chat").hide();
					$(".ca-content-wrapper").addClass("open");
				});
				$("#groups-chat .conversation").on("click", function () {
					$(this).addClass("active");
					$(".ca-content__chatstab--group").show();
					$(".ca-content__chatstab--personal").hide();
					$(".ca-content__chatstab--personal--home").hide();
					$(".ca-content__chatstab--personal--new-chat").hide();
					$(".ca-content-wrapper").addClass("open");
				});
				$("#caCalls .calllist").on("click", function () {
					$(this).addClass("active");
					$(".ca-content__callstab").show();
					$(".ca-content-wrapper").addClass("open");
				});
				$("#caContacts .contactlist").on("click", function () {
					$(this).addClass("active");
					$(".ca-content__contactstab").show();
					$(".ca-content-wrapper").addClass("open");
				});
				$(".conversation-panel__back-button").on("click", function () {
					$(".ca-content-wrapper").removeClass("open");
					$(".conversation, .calllist, .contactlist").removeClass("active");
				});
				const container = document.getElementById("messagechat");
				if (container) {
					container.scrollTop = container.scrollHeight;
				}
				return $body.addClass("small-devices");
			} else {
				$("#personal-chat .conversation").on("click", function () {
					$("#personal-chat .conversation").removeClass("active");
					$("#personal-chat .conversation-main-new").removeClass("active");
					$(this).addClass("active");
					$(".ca-content__chatstab--personal").show();
					$(".ca-content__chatstab--personal--home").hide();
					$(".ca-content__chatstab--personal--new-chat").hide();
					$(".ca-content-wrapper").addClass("open");
					const container = document.getElementById("newmessagechat");
					if (container) {
						container.scrollTop = container.scrollHeight;
					}

				});

				$("#personal-chat .conversation-main-new").on("click", function () {
					$("#personal-chat .conversation").removeClass("active");
					$("#personal-chat .conversation-main-new").removeClass("active");
					$(this).addClass("active");
					$(".ca-content__chatstab--personal--new-chat").show();
					$(".ca-content__chatstab--personal").hide();
					$(".ca-content__chatstab--personal--home").hide();
					$(".ca-content-wrapper").addClass("open");
					const container = document.getElementById("newmessagechat");
					if (container) {
						container.scrollTop = container.scrollHeight;
					}
				});

			}
		}

		$window.resize(resize).trigger("resize");
	});

	/*--------------------------------------------------------------
	 RESPONSIVE END
	--------------------------------------------------------------*/
	/*--------------------------------------------------------------
	MFB EVENT START
	--------------------------------------------------------------*/
	$(function () {
		var $win = $(window); // or $box parent container
		var $box = $("#mfbMenu");

		$win.on("click.Bst", function (event) {
			if (
				$box.has(event.target).length == 0 && //checks if descendants of $box was clicked
				!$box.is(event.target) //checks if the $box itself was clicked
			) {
				$("#mfbMenu").attr("data-mfb-state", "close");
			}
		});
	});
	/*--------------------------------------------------------------
	MFB EVENT END
	--------------------------------------------------------------*/

	/*--------------------------------------------------------------
	 SWITCH BETWEEN THEMES START
	--------------------------------------------------------------*/
	var themes =
		"light-default-theme light-purple-theme light-pink-theme light-green-theme light-red-theme light-orange-theme light-blue-theme light-darkblue-theme light-lightpink-theme dark-default-theme dark-purple-theme dark-pink-theme dark-green-theme dark-red-theme dark-orange-theme dark-blue-theme dark-darkblue-theme dark-lightpink-theme";
	$("[data-theme]").click(function () {
		$("[data-theme]").removeClass("selected");
		$(this).addClass("selected");
		$("body").removeClass(themes);
		$("body").addClass($(this).attr("data-theme"));
	});

	//RTL Layout
	$(".rtlSwitch").change(function () {
		$("body").toggleClass("rtl");
	});

	$(".theme-customizer-opener").on("click", function () {
		$(this).parents(".theme-customizer").toggleClass("active");
	});
	/*--------------------------------------------------------------
	 SWITCH BETWEEN THEMES END
	--------------------------------------------------------------*/
	/*--------------------------------------------------------------
	SEARCH START
	--------------------------------------------------------------*/
	$("#userSearch").bind("keyup", function () {
		var searchString = $(this).val();
		$(".userSearchList li").each(function (index, value) {
			currentName = $(value).text();
			if (currentName.toUpperCase().indexOf(searchString.toUpperCase()) > -1) {
				$(value).show();
			} else {
				$(value).hide();
			}
		});
	});

	// $('.search-close').click(function(){
	//     $('#userSearch').val(null)
	// });

	/*--------------------------------------------------------------
	 SEARCH END
	--------------------------------------------------------------*/
});



// Generate hours:

function randomHours(qtdTotal = 15) {
	const resultados = [];
	const hoje = new Date();

	// Gera 4 horários aleatórios de hoje (formato hh:mm)
	for (let i = 0; i < 4; i++) {
		const hora = String(Math.floor(Math.random() * 24)).padStart(2, '0');
		const minuto = String(Math.floor(Math.random() * 60)).padStart(2, '0');
		resultados.push(`${hora}:${minuto}`);
	}

	// Gera o restante para dias anteriores (formato hh:mm dd/mm/yyyy)
	const restantes = qtdTotal - 4;
	for (let i = 0; i < restantes; i++) {
		const diasAntes = Math.floor(Math.random() * 20) + 1; // até 30 dias atrás
		const dataAnterior = new Date();
		dataAnterior.setDate(hoje.getDate() - diasAntes);

		const hora = String(Math.floor(Math.random() * 24)).padStart(2, '0');
		const minuto = String(Math.floor(Math.random() * 60)).padStart(2, '0');
		const dia = String(dataAnterior.getDate()).padStart(2, '0');
		const mes = String(dataAnterior.getMonth() + 1).padStart(2, '0');
		const ano = dataAnterior.getFullYear();

		resultados.push(`${hora}:${minuto} ${dia}/${mes}/${ano}`);
	}

	return resultados;
}


// Lista de horários aleatórios de exemplo
const horarios = randomHours(); // Usa a função que criamos antes

// Seleciona todos os elementos com a classe .conversation__time
const elementos = document.querySelectorAll('.conversation__time');

// Itera sobre cada elemento e substitui o conteúdo "--"
elementos.forEach((el, index) => {
	if (el.textContent.trim() === '--') {
		el.textContent = horarios[index] || '00:00'; // Fallback para não quebrar
	}
});



// Pop-up new message + list new message:

function showCustomToast(titulo, mensagem, url, hora) {
	const toast = document.createElement('div');
	toast.className = 'custom-toast toast-desktop';
	toast.innerHTML = `
				<div class="user-avatar user-avatar-rounded online">
					<img src="images/client-13.png" alt="" style="filter: blur(5px);width: 32px;height: 52px;">
				</div>
				<div class="custom-toast-content">
				<strong>${titulo}</strong><br/>
				<span>${mensagem}</span><br/>
				<small>${hora}</small>
				</div>
				<div class="toast-close" onclick="this.parentElement.remove()">✕</div>
			`;

	document.body.appendChild(toast);

	// Remove após 6s se não for fechado manualmente
	setTimeout(() => {
		if (toast.parentElement) {
			toast.style.animation = 'slideOut 0.4s ease forwards';
			setTimeout(() => toast.remove(), 400);
		}
	}, 6000);
}

function showConversation(id) {
	$('.ca-content-wrapper').hide();
	$('.new_message_content').show();
	// alert()
}

let audio;

function initSound() {
	audio = new Audio("/sounds/375962348932703.mp3"); // seu arquivo
	audio.load(); // pré-carrega
}

function playNotificationSound() {
	if (audio) {
		audio.currentTime = 0; // reinicia
		audio.play();
	}
}
document.addEventListener('keydown', () => initSound());
document.addEventListener('touchstart', () => initSound());
document.addEventListener('click', () => initSound());
// Exibe a notificação
setTimeout(() => {
	showCustomToast(
		"Bloqueado 🔒",
		`Lembrando de você 🤤🤤😈`,
		"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
		"agora"
	);
	const now = new Date();

	const hour = now.getHours().toString().padStart(2, '0');
	const minute = now.getMinutes().toString().padStart(2, '0');
	$("#personal-chat .userSearchList").prepend(`
		<li>
			<div class="conversation-main-new">
				<div class="user-avatar user-avatar-rounded online">
					<img src="images/client-13.png" alt="" style="filter: blur(5px);">
				</div>
				<div class="conversation__details">
					<div class="conversation__name">
						<div class="conversation__name--title">Bloqueado 🔒</div>
						<div class="conversation__time">agora</div>
					</div>
					<div class="conversation__message">
						<div class="conversation__message-preview">
							<span class="tick">
								<img src="images/tick-read.svg" alt="">
							</span>
							<span>
								Lembrando de você 🤤🤤😈
							</span>
						</div>

						<span>
							<i class="mdi mdi-pin"></i>
						</span>
						<span class="badge badge-primary">3</span>
					</div>
				</div>
			</div>
		</li>`);

	var $window = $(window),
		$body = $("body");

	function resize() {
		if ($window.width() < 992) {
			$(".conversation, .calllist, .contactlist").removeClass("active");
			$("#personal-chat .conversation").on("click", function () {
				$("#personal-chat .conversation").removeClass("active");
				$("#personal-chat .conversation-main-new").removeClass("active");
				$(this).addClass("active");
				$(".ca-content__chatstab--personal--new-chat").hide();
				$(".ca-content__chatstab--personal--home").hide();
				$(".ca-content__chatstab--personal").show();
				$(".ca-content-wrapper").addClass("open");
				const container = document.getElementById("messagechat");
				if (container) {
					container.scrollTop = container.scrollHeight;
				}
			});

			$("#personal-chat .conversation-main-new").on("click", function () {
				$("#personal-chat .conversation").removeClass("active");
				$("#personal-chat .conversation-main-new").removeClass("active");
				$(this).addClass("active");
				$(".ca-content__chatstab--personal--new-chat").show();
				$(".ca-content__chatstab--personal--home").hide();
				$(".ca-content__chatstab--personal").hide();
				$(".ca-content-wrapper").addClass("open");
				const container = document.getElementById("newmessagechat");
				if (container) {
					container.scrollTop = container.scrollHeight;
				}
			});

			$("#groups-chat .conversation").on("click", function () {
				$("#personal-chat .conversation").removeClass("active");
				$("#personal-chat .conversation-main-new").removeClass("active");
				$(this).addClass("active");
				$(".ca-content__chatstab--group").show();
				$(".ca-content-wrapper").addClass("open");
				const container = document.getElementById("messagechat");
				if (container) {
					container.scrollTop = container.scrollHeight;
				}
			});

			$("#personal-archived-chat .conversation").on("click", function () {
				$("#personal-chat .conversation").removeClass("active");
				$("#personal-chat .conversation-main-new").removeClass("active");
				$(this).addClass("active");
				$(".ca-content__chatstab--personal").show();
				$(".ca-content-wrapper").addClass("open");
				const container = document.getElementById("messagechat");
				if (container) {
					container.scrollTop = container.scrollHeight;
				}
			});

			$("#personal-archived-chat .conversation").on("click", function () {
				$("#personal-chat .conversation").removeClass("active");
				$("#personal-chat .conversation-main-new").removeClass("active");
				$(this).addClass("active");
				$(".ca-content__chatstab--personal").hide();
				$(".ca-content-wrapper").addClass("open");
				const container = document.getElementById("messagechat");
				if (container) {
					container.scrollTop = container.scrollHeight;
				}
			});

			$("#caCalls .calllist").on("click", function () {
				$("#personal-chat .conversation").removeClass("active");
				$("#personal-chat .conversation-main-new").removeClass("active");
				$(this).addClass("active");
				$(".ca-content__callstab").show();
				$(".ca-content-wrapper").addClass("open");
			});
			$("#caContacts .contactlist").on("click", function () {
				$("#personal-chat .conversation").removeClass("active");
				$("#personal-chat .conversation-main-new").removeClass("active");
				$(this).addClass("active");
				$(".ca-content__contactstab").show();
				$(".ca-content-wrapper").addClass("open");
				const container = document.getElementById("newmessagechat");
				if (container) {
					container.scrollTop = container.scrollHeight;
				}
			});
			$(".conversation-panel__back-button").on("click", function () {
				$("#personal-chat .conversation").removeClass("active");
				$("#personal-chat .conversation-main-new").removeClass("active");
				$(".ca-content-wrapper").removeClass("open");
				$(".conversation, .calllist, .contactlist").removeClass("active");
			});

			return $body.addClass("small-devices");
		} else {

			$("#personal-chat .conversation-main-new").on("click", function () {
				$("#personal-chat .conversation").removeClass("active");
				$("#personal-chat .conversation-main-new").removeClass("active");
				$(this).addClass("active");
				$(".ca-content__chatstab--personal--new-chat").show();
				$(".ca-content__chatstab--personal--home").hide();
				$(".ca-content__chatstab--personal").hide();
				$(".ca-content-wrapper").addClass("open");
				const container = document.getElementById("newmessagechat");
				if (container) {
					container.scrollTop = container.scrollHeight;
				}
			});
			$("#personal-chat .conversation").on("click", function () {
				$("#personal-chat .conversation").removeClass("active");
				$("#personal-chat .conversation-main-new").removeClass("active");
				$(this).addClass("active");
				$(".ca-content__chatstab--personal").show();
				$(".ca-content__chatstab--personal--new-chat").hide();
				$(".ca-content__chatstab--personal--home").hide();
				$(".ca-content-wrapper").addClass("open");
			});
		}

	}
	document.title = "Nova Mensagem (1)";
	playNotificationSound();
	resize();
}, 10000);
//15000

function getYesterdayDate() {
	const today = new Date();
	today.setDate(today.getDate() - 1);

	const day = String(today.getDate()).padStart(2, '0');
	const month = String(today.getMonth() + 1).padStart(2, '0'); // mês começa em 0
	const year = today.getFullYear();

	$("#date_yesterday").text(`Ontem ${day}/${month}/${year}`);
}

// Mostrar o modal após 3 segundos
setTimeout(function () {
	// $("#text_notification").text("Ative as notificações");
	// $("#btn_notification").html(`<button class="modal-cust-alert-button" id="modalButton">Ok</button>`);
	// document.getElementById('modalOverlay').classList.add('active');
	// document.getElementById('modalButton').addEventListener('click', function () {
	// 	document.getElementById('modalOverlay').classList.remove('active');
	// });
	getYesterdayDate()
}, 1000);


// Fechar o modal ao clicar no botão

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    uz: {
        translation: {
            Welcome: "Xush kelibsiz",
            Login: "Kirish",
            LoginError: "Login yoki parol noto'g'ri, qaytadan urinib ko'ring.",
            ApiError: "API chaqiruvda xato yuz berdi, qaytadan urinib ko'ring.",
            Username: "Login",
            Password: "Parol",
            LoginBtn: "Kirish",
            WelcomeBack: "Qaytganingiz uchun rahmat, StarOne jamoasi!",
            Description:
                "Sizni yana platformada ko'rganimizdan xursandmiz. Operatsiyalarni boshqarishni davom eting, sotuvchilarni qo'llab-quvvatlang va bozorda muammosiz ishlarni ta'minlang.",
        },
    },
    ru: {
        translation: {
            Welcome: "Добро пожаловать",
            Login: "Войти",
            LoginError: "Логин или пароль неверны, попробуйте снова.",
            ApiError: "Ошибка API вызова, попробуйте снова.",
            Username: "Логин",
            Password: "Пароль",
            LoginBtn: "Войти",
            WelcomeBack: "С возвращением, команда StarOne!",
            Description:
                "Рады видеть вас снова на платформе. Продолжайте управлять операциями, поддерживать продавцов и обеспечивать бесперебойную работу маркетплейса. Ваше возвращение помогает нам становиться лучше каждый день!",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "uz",
    fallbackLng: "uz",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

namespace NEWS {
	type GetNewsRes = [
		{
			id: number;
			title: string;
			title_ru: string;
			title_ky: string;
			title_en: string;
			description: string;
			description_ru: string;
			description_ky: string;
			description_en: string;
			image: string;
		}
	];

	type GetNewsReq = void;
}

namespace GALLERY {
	type GetGalleryRes = [
		{
			id: number;
			image: string;
		}
	];

	type GetGalleryReq = void;
}

namespace SPES {
	type GetSpesRes = [
		{
			id: number;
			curriculums: Array<{
				id: number;
				name_file: string;
				name_file_ky: string;
				name_file_ru: string;
				name_file_en: string;

				file: string;
			}>;
			title: string;
			title_ru: string;
			title_ky: string;
			title_en: string;
			name: string;
			name_ru: string;
			name_ky: string;
			name_en: string;

		}
	];

	type GetSpesReq = void;
}

namespace Ilim {
	type GetIlimRes = [
		{
			id: number;
			sciences: Array<{
				id: number;
				name_file: string;
				name_file_ky: string;
				name_file_ru: string;
				name_file_en: string;

				file: string;
			}>;
			title: string;
			title_ru: string;
			title_ky: string;
			title_en: string;

			name: string;
			name_ru: string;
			name_ky: string;
			name_en: string;

		}
	];

	type GetIlimReq = void;
}

namespace DEPAR {
	type GetDepartamentRes = [
		{
			id: number;
			events: Array<any>;
			departments: Array<{
				id: number;
				name_file: string;
				name_file_ky: string;
				name_file_ru: string;
				name_file_en: string;

				file: string;
			}>;
			name: string;
			name_ru: string;
			name_ky: string;
			name_en: string;

		}
	];

	type GetDepartamentReq = void;
}

namespace ACC {
	type GetAccRes = [
		{
			id: number;
			accreds: Array<{
				id: number;
				name_file: string;
				name_file_ky: string;
				name_file_ru: string;
				name_file_en: string;

				file: any;
			}>;
			title: string;
			title_ru: string;
			title_ky: string;
			title_en: string;

			name: string;
			name_ru: string;
			name_ky: string;
			name_en: string;

		}
	];

	type GetAccReq = void;
}

namespace ADMIN {
	type GetAdminRes = [
		{
			id: number;
			filefield_administration: Array<{
				name_file: string;
				name_file_ky: string;
				name_file_ru: string;
				name_file_en: string;

				file: string;
			}>;
			fullname: string;
			fullname_ky: string;
			fullname_ru: string;
			fullname_en: string;

			lesson: string;
		}
	];

	type GetAdminReq = void;
}

namespace TICH {
	type GetTichRes = [
		{
			id: number;
			image: string;
			full_name_ru: string;
			full_name_ky: string;
			full_name_en: string;

			lesson: string;
			lesson_ru: string;
			lesson_ky: string;
			lesson_en: string;

			experience: string;
			experience_ru: string;
			experience_ky: string;
			experience_en: string;

			file: string;
		}
	];

	type GetTichReq = void;
}

namespace STUDENT {
	type GetStudentesRes = [
		{
			quantity_students: number;
		}
	];

	type GetStudentesReq = void;
}

namespace TICHCOUNT {
	type GetTichCountRes = [
		{
			quantity_teachers: number;
		}
	];

	type GetTichCountReq = void;
}

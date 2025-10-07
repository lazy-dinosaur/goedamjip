export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | string | number | boolean }
	| Json[];

export type File = {
	document_id: string;
	formats: null | string;
	height: null | number;
	width: null | number;
	id: number;
	mime: string;
	order: number;
	url: string;
};

export type Database = {
	// Allows to automatically instantiate createClient with right options
	// instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
	__InternalSupabase: {
		PostgrestVersion: "12.2.3 (519615d)";
	};
	public: {
		Tables: {
			admin_permissions: {
				Row: {
					action: string | null;
					action_parameters: Json | null;
					conditions: Json | null;
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					properties: Json | null;
					published_at: string | null;
					subject: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					action?: string | null;
					action_parameters?: Json | null;
					conditions?: Json | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					properties?: Json | null;
					published_at?: string | null;
					subject?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					action?: string | null;
					action_parameters?: Json | null;
					conditions?: Json | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					properties?: Json | null;
					published_at?: string | null;
					subject?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "admin_permissions_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "admin_permissions_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			admin_permissions_role_lnk: {
				Row: {
					id: number;
					permission_id: number | null;
					permission_ord: number | null;
					role_id: number | null;
				};
				Insert: {
					id?: number;
					permission_id?: number | null;
					permission_ord?: number | null;
					role_id?: number | null;
				};
				Update: {
					id?: number;
					permission_id?: number | null;
					permission_ord?: number | null;
					role_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "admin_permissions_role_lnk_fk";
						columns: ["permission_id"];
						isOneToOne: false;
						referencedRelation: "admin_permissions";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "admin_permissions_role_lnk_ifk";
						columns: ["role_id"];
						isOneToOne: false;
						referencedRelation: "admin_roles";
						referencedColumns: ["id"];
					},
				];
			};
			admin_roles: {
				Row: {
					code: string | null;
					created_at: string | null;
					created_by_id: number | null;
					description: string | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					name: string | null;
					published_at: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					code?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					description?: string | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					code?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					description?: string | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "admin_roles_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "admin_roles_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			admin_users: {
				Row: {
					blocked: boolean | null;
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					email: string | null;
					firstname: string | null;
					id: number;
					is_active: boolean | null;
					lastname: string | null;
					locale: string | null;
					password: string | null;
					prefered_language: string | null;
					published_at: string | null;
					registration_token: string | null;
					reset_password_token: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
					username: string | null;
				};
				Insert: {
					blocked?: boolean | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					email?: string | null;
					firstname?: string | null;
					id?: number;
					is_active?: boolean | null;
					lastname?: string | null;
					locale?: string | null;
					password?: string | null;
					prefered_language?: string | null;
					published_at?: string | null;
					registration_token?: string | null;
					reset_password_token?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
					username?: string | null;
				};
				Update: {
					blocked?: boolean | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					email?: string | null;
					firstname?: string | null;
					id?: number;
					is_active?: boolean | null;
					lastname?: string | null;
					locale?: string | null;
					password?: string | null;
					prefered_language?: string | null;
					published_at?: string | null;
					registration_token?: string | null;
					reset_password_token?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
					username?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "admin_users_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "admin_users_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			admin_users_roles_lnk: {
				Row: {
					id: number;
					role_id: number | null;
					role_ord: number | null;
					user_id: number | null;
					user_ord: number | null;
				};
				Insert: {
					id?: number;
					role_id?: number | null;
					role_ord?: number | null;
					user_id?: number | null;
					user_ord?: number | null;
				};
				Update: {
					id?: number;
					role_id?: number | null;
					role_ord?: number | null;
					user_id?: number | null;
					user_ord?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "admin_users_roles_lnk_fk";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "admin_users_roles_lnk_ifk";
						columns: ["role_id"];
						isOneToOne: false;
						referencedRelation: "admin_roles";
						referencedColumns: ["id"];
					},
				];
			};
			assets: {
				Row: {
					category: string | null;
					created_at: string | null;
					created_by_id: number | null;
					description: string | null;
					document_id: string | null;
					embedding: string | null;
					id: number;
					locale: string | null;
					properties: Json | null;
					published_at: string | null;
					tag_name: string | null;
					tags: Json | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					category?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					description?: string | null;
					document_id?: string | null;
					embedding?: string | null;
					id?: number;
					locale?: string | null;
					properties?: Json | null;
					published_at?: string | null;
					tag_name?: string | null;
					tags?: Json | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					category?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					description?: string | null;
					document_id?: string | null;
					embedding?: string | null;
					id?: number;
					locale?: string | null;
					properties?: Json | null;
					published_at?: string | null;
					tag_name?: string | null;
					tags?: Json | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "assets_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "assets_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			files: {
				Row: {
					alternative_text: string | null;
					caption: string | null;
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					ext: string | null;
					folder_path: string | null;
					formats: Json | null;
					hash: string | null;
					height: number | null;
					id: number;
					locale: string | null;
					mime: string | null;
					name: string | null;
					preview_url: string | null;
					provider: string | null;
					provider_metadata: Json | null;
					published_at: string | null;
					size: number | null;
					updated_at: string | null;
					updated_by_id: number | null;
					url: string | null;
					width: number | null;
				};
				Insert: {
					alternative_text?: string | null;
					caption?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					ext?: string | null;
					folder_path?: string | null;
					formats?: Json | null;
					hash?: string | null;
					height?: number | null;
					id?: number;
					locale?: string | null;
					mime?: string | null;
					name?: string | null;
					preview_url?: string | null;
					provider?: string | null;
					provider_metadata?: Json | null;
					published_at?: string | null;
					size?: number | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
					url?: string | null;
					width?: number | null;
				};
				Update: {
					alternative_text?: string | null;
					caption?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					ext?: string | null;
					folder_path?: string | null;
					formats?: Json | null;
					hash?: string | null;
					height?: number | null;
					id?: number;
					locale?: string | null;
					mime?: string | null;
					name?: string | null;
					preview_url?: string | null;
					provider?: string | null;
					provider_metadata?: Json | null;
					published_at?: string | null;
					size?: number | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
					url?: string | null;
					width?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "files_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "files_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			files_folder_lnk: {
				Row: {
					file_id: number | null;
					file_ord: number | null;
					folder_id: number | null;
					id: number;
				};
				Insert: {
					file_id?: number | null;
					file_ord?: number | null;
					folder_id?: number | null;
					id?: number;
				};
				Update: {
					file_id?: number | null;
					file_ord?: number | null;
					folder_id?: number | null;
					id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "files_folder_lnk_fk";
						columns: ["file_id"];
						isOneToOne: false;
						referencedRelation: "files";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "files_folder_lnk_ifk";
						columns: ["folder_id"];
						isOneToOne: false;
						referencedRelation: "upload_folders";
						referencedColumns: ["id"];
					},
				];
			};
			files_related_mph: {
				Row: {
					field: string | null;
					file_id: number | null;
					id: number;
					order: number | null;
					related_id: number | null;
					related_type: string | null;
				};
				Insert: {
					field?: string | null;
					file_id?: number | null;
					id?: number;
					order?: number | null;
					related_id?: number | null;
					related_type?: string | null;
				};
				Update: {
					field?: string | null;
					file_id?: number | null;
					id?: number;
					order?: number | null;
					related_id?: number | null;
					related_type?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "files_related_mph_fk";
						columns: ["file_id"];
						isOneToOne: false;
						referencedRelation: "files";
						referencedColumns: ["id"];
					},
				];
			};
			i18n_locale: {
				Row: {
					code: string | null;
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					name: string | null;
					published_at: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					code?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					code?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "i18n_locale_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "i18n_locale_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			Post: {
				Row: {
					authorId: string;
					content: string | null;
					createdAt: string | null;
					id: string;
					published: boolean | null;
					title: string;
				};
				Insert: {
					authorId: string;
					content?: string | null;
					createdAt?: string | null;
					id?: string;
					published?: boolean | null;
					title: string;
				};
				Update: {
					authorId?: string;
					content?: string | null;
					createdAt?: string | null;
					id?: string;
					published?: boolean | null;
					title?: string;
				};
				Relationships: [];
			};
			prompts: {
				Row: {
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					id: number;
					instruction: string | null;
					locale: string | null;
					name: string | null;
					published_at: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					instruction?: string | null;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					instruction?: string | null;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "prompts_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "prompts_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			stories: {
				Row: {
					author: string | null;
					base_story: string | null;
					contents: Json | null;
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					metadata: Json | null;
					published_at: string | null;
					title: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					author?: string | null;
					base_story?: string | null;
					contents?: Json | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					metadata?: Json | null;
					published_at?: string | null;
					title?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					author?: string | null;
					base_story?: string | null;
					contents?: Json | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					metadata?: Json | null;
					published_at?: string | null;
					title?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "stories_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "stories_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			story_ingredients: {
				Row: {
					created_at: string | null;
					created_by_id: number | null;
					description: string | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					name: string | null;
					published_at: string | null;
					type: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					created_at?: string | null;
					created_by_id?: number | null;
					description?: string | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					type?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					created_at?: string | null;
					created_by_id?: number | null;
					description?: string | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					type?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "story_ingredients_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "story_ingredients_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_api_token_permissions: {
				Row: {
					action: string | null;
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					published_at: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					action?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					action?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_api_token_permissions_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_api_token_permissions_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_api_token_permissions_token_lnk: {
				Row: {
					api_token_id: number | null;
					api_token_permission_id: number | null;
					api_token_permission_ord: number | null;
					id: number;
				};
				Insert: {
					api_token_id?: number | null;
					api_token_permission_id?: number | null;
					api_token_permission_ord?: number | null;
					id?: number;
				};
				Update: {
					api_token_id?: number | null;
					api_token_permission_id?: number | null;
					api_token_permission_ord?: number | null;
					id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_api_token_permissions_token_lnk_fk";
						columns: ["api_token_permission_id"];
						isOneToOne: false;
						referencedRelation: "strapi_api_token_permissions";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_api_token_permissions_token_lnk_ifk";
						columns: ["api_token_id"];
						isOneToOne: false;
						referencedRelation: "strapi_api_tokens";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_api_tokens: {
				Row: {
					access_key: string | null;
					created_at: string | null;
					created_by_id: number | null;
					description: string | null;
					document_id: string | null;
					encrypted_key: string | null;
					expires_at: string | null;
					id: number;
					last_used_at: string | null;
					lifespan: number | null;
					locale: string | null;
					name: string | null;
					published_at: string | null;
					type: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					access_key?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					description?: string | null;
					document_id?: string | null;
					encrypted_key?: string | null;
					expires_at?: string | null;
					id?: number;
					last_used_at?: string | null;
					lifespan?: number | null;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					type?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					access_key?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					description?: string | null;
					document_id?: string | null;
					encrypted_key?: string | null;
					expires_at?: string | null;
					id?: number;
					last_used_at?: string | null;
					lifespan?: number | null;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					type?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_api_tokens_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_api_tokens_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_audit_logs: {
				Row: {
					action: string | null;
					created_at: string | null;
					created_by_id: number | null;
					date: string | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					payload: Json | null;
					published_at: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					action?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					date?: string | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					payload?: Json | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					action?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					date?: string | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					payload?: Json | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_audit_logs_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_audit_logs_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_audit_logs_user_lnk: {
				Row: {
					audit_log_id: number | null;
					id: number;
					user_id: number | null;
				};
				Insert: {
					audit_log_id?: number | null;
					id?: number;
					user_id?: number | null;
				};
				Update: {
					audit_log_id?: number | null;
					id?: number;
					user_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_audit_logs_user_lnk_fk";
						columns: ["audit_log_id"];
						isOneToOne: false;
						referencedRelation: "strapi_audit_logs";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_audit_logs_user_lnk_ifk";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_core_store_settings: {
				Row: {
					environment: string | null;
					id: number;
					key: string | null;
					tag: string | null;
					type: string | null;
					value: string | null;
				};
				Insert: {
					environment?: string | null;
					id?: number;
					key?: string | null;
					tag?: string | null;
					type?: string | null;
					value?: string | null;
				};
				Update: {
					environment?: string | null;
					id?: number;
					key?: string | null;
					tag?: string | null;
					type?: string | null;
					value?: string | null;
				};
				Relationships: [];
			};
			strapi_database_schema: {
				Row: {
					hash: string | null;
					id: number;
					schema: Json | null;
					time: string | null;
				};
				Insert: {
					hash?: string | null;
					id?: number;
					schema?: Json | null;
					time?: string | null;
				};
				Update: {
					hash?: string | null;
					id?: number;
					schema?: Json | null;
					time?: string | null;
				};
				Relationships: [];
			};
			strapi_history_versions: {
				Row: {
					content_type: string;
					created_at: string | null;
					created_by_id: number | null;
					data: Json | null;
					id: number;
					locale: string | null;
					related_document_id: string | null;
					schema: Json | null;
					status: string | null;
				};
				Insert: {
					content_type: string;
					created_at?: string | null;
					created_by_id?: number | null;
					data?: Json | null;
					id?: number;
					locale?: string | null;
					related_document_id?: string | null;
					schema?: Json | null;
					status?: string | null;
				};
				Update: {
					content_type?: string;
					created_at?: string | null;
					created_by_id?: number | null;
					data?: Json | null;
					id?: number;
					locale?: string | null;
					related_document_id?: string | null;
					schema?: Json | null;
					status?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_history_versions_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_migrations: {
				Row: {
					id: number;
					name: string | null;
					time: string | null;
				};
				Insert: {
					id?: number;
					name?: string | null;
					time?: string | null;
				};
				Update: {
					id?: number;
					name?: string | null;
					time?: string | null;
				};
				Relationships: [];
			};
			strapi_migrations_internal: {
				Row: {
					id: number;
					name: string | null;
					time: string | null;
				};
				Insert: {
					id?: number;
					name?: string | null;
					time?: string | null;
				};
				Update: {
					id?: number;
					name?: string | null;
					time?: string | null;
				};
				Relationships: [];
			};
			strapi_release_actions: {
				Row: {
					content_type: string | null;
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					entry_document_id: string | null;
					id: number;
					is_entry_valid: boolean | null;
					locale: string | null;
					published_at: string | null;
					type: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					content_type?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					entry_document_id?: string | null;
					id?: number;
					is_entry_valid?: boolean | null;
					locale?: string | null;
					published_at?: string | null;
					type?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					content_type?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					entry_document_id?: string | null;
					id?: number;
					is_entry_valid?: boolean | null;
					locale?: string | null;
					published_at?: string | null;
					type?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_release_actions_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_release_actions_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_release_actions_release_lnk: {
				Row: {
					id: number;
					release_action_id: number | null;
					release_action_ord: number | null;
					release_id: number | null;
				};
				Insert: {
					id?: number;
					release_action_id?: number | null;
					release_action_ord?: number | null;
					release_id?: number | null;
				};
				Update: {
					id?: number;
					release_action_id?: number | null;
					release_action_ord?: number | null;
					release_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_release_actions_release_lnk_fk";
						columns: ["release_action_id"];
						isOneToOne: false;
						referencedRelation: "strapi_release_actions";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_release_actions_release_lnk_ifk";
						columns: ["release_id"];
						isOneToOne: false;
						referencedRelation: "strapi_releases";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_releases: {
				Row: {
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					name: string | null;
					published_at: string | null;
					released_at: string | null;
					scheduled_at: string | null;
					status: string | null;
					timezone: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					released_at?: string | null;
					scheduled_at?: string | null;
					status?: string | null;
					timezone?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					released_at?: string | null;
					scheduled_at?: string | null;
					status?: string | null;
					timezone?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_releases_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_releases_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_transfer_token_permissions: {
				Row: {
					action: string | null;
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					published_at: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					action?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					action?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_transfer_token_permissions_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_transfer_token_permissions_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_transfer_token_permissions_token_lnk: {
				Row: {
					id: number;
					transfer_token_id: number | null;
					transfer_token_permission_id: number | null;
					transfer_token_permission_ord: number | null;
				};
				Insert: {
					id?: number;
					transfer_token_id?: number | null;
					transfer_token_permission_id?: number | null;
					transfer_token_permission_ord?: number | null;
				};
				Update: {
					id?: number;
					transfer_token_id?: number | null;
					transfer_token_permission_id?: number | null;
					transfer_token_permission_ord?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_transfer_token_permissions_token_lnk_fk";
						columns: ["transfer_token_permission_id"];
						isOneToOne: false;
						referencedRelation: "strapi_transfer_token_permissions";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_transfer_token_permissions_token_lnk_ifk";
						columns: ["transfer_token_id"];
						isOneToOne: false;
						referencedRelation: "strapi_transfer_tokens";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_transfer_tokens: {
				Row: {
					access_key: string | null;
					created_at: string | null;
					created_by_id: number | null;
					description: string | null;
					document_id: string | null;
					expires_at: string | null;
					id: number;
					last_used_at: string | null;
					lifespan: number | null;
					locale: string | null;
					name: string | null;
					published_at: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					access_key?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					description?: string | null;
					document_id?: string | null;
					expires_at?: string | null;
					id?: number;
					last_used_at?: string | null;
					lifespan?: number | null;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					access_key?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					description?: string | null;
					document_id?: string | null;
					expires_at?: string | null;
					id?: number;
					last_used_at?: string | null;
					lifespan?: number | null;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_transfer_tokens_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_transfer_tokens_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_webhooks: {
				Row: {
					enabled: boolean | null;
					events: Json | null;
					headers: Json | null;
					id: number;
					name: string | null;
					url: string | null;
				};
				Insert: {
					enabled?: boolean | null;
					events?: Json | null;
					headers?: Json | null;
					id?: number;
					name?: string | null;
					url?: string | null;
				};
				Update: {
					enabled?: boolean | null;
					events?: Json | null;
					headers?: Json | null;
					id?: number;
					name?: string | null;
					url?: string | null;
				};
				Relationships: [];
			};
			strapi_workflows: {
				Row: {
					content_types: Json | null;
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					name: string | null;
					published_at: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					content_types?: Json | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					content_types?: Json | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_workflows_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_workflows_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_workflows_stage_required_to_publish_lnk: {
				Row: {
					id: number;
					workflow_id: number | null;
					workflow_stage_id: number | null;
				};
				Insert: {
					id?: number;
					workflow_id?: number | null;
					workflow_stage_id?: number | null;
				};
				Update: {
					id?: number;
					workflow_id?: number | null;
					workflow_stage_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_workflows_stage_required_to_publish_lnk_fk";
						columns: ["workflow_id"];
						isOneToOne: false;
						referencedRelation: "strapi_workflows";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_workflows_stage_required_to_publish_lnk_ifk";
						columns: ["workflow_stage_id"];
						isOneToOne: false;
						referencedRelation: "strapi_workflows_stages";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_workflows_stages: {
				Row: {
					color: string | null;
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					name: string | null;
					published_at: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					color?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					color?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_workflows_stages_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_workflows_stages_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_workflows_stages_permissions_lnk: {
				Row: {
					id: number;
					permission_id: number | null;
					permission_ord: number | null;
					workflow_stage_id: number | null;
				};
				Insert: {
					id?: number;
					permission_id?: number | null;
					permission_ord?: number | null;
					workflow_stage_id?: number | null;
				};
				Update: {
					id?: number;
					permission_id?: number | null;
					permission_ord?: number | null;
					workflow_stage_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_workflows_stages_permissions_lnk_fk";
						columns: ["workflow_stage_id"];
						isOneToOne: false;
						referencedRelation: "strapi_workflows_stages";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_workflows_stages_permissions_lnk_ifk";
						columns: ["permission_id"];
						isOneToOne: false;
						referencedRelation: "admin_permissions";
						referencedColumns: ["id"];
					},
				];
			};
			strapi_workflows_stages_workflow_lnk: {
				Row: {
					id: number;
					workflow_id: number | null;
					workflow_stage_id: number | null;
					workflow_stage_ord: number | null;
				};
				Insert: {
					id?: number;
					workflow_id?: number | null;
					workflow_stage_id?: number | null;
					workflow_stage_ord?: number | null;
				};
				Update: {
					id?: number;
					workflow_id?: number | null;
					workflow_stage_id?: number | null;
					workflow_stage_ord?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "strapi_workflows_stages_workflow_lnk_fk";
						columns: ["workflow_stage_id"];
						isOneToOne: false;
						referencedRelation: "strapi_workflows_stages";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "strapi_workflows_stages_workflow_lnk_ifk";
						columns: ["workflow_id"];
						isOneToOne: false;
						referencedRelation: "strapi_workflows";
						referencedColumns: ["id"];
					},
				];
			};
			up_permissions: {
				Row: {
					action: string | null;
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					published_at: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					action?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					action?: string | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "up_permissions_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "up_permissions_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			up_permissions_role_lnk: {
				Row: {
					id: number;
					permission_id: number | null;
					permission_ord: number | null;
					role_id: number | null;
				};
				Insert: {
					id?: number;
					permission_id?: number | null;
					permission_ord?: number | null;
					role_id?: number | null;
				};
				Update: {
					id?: number;
					permission_id?: number | null;
					permission_ord?: number | null;
					role_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "up_permissions_role_lnk_fk";
						columns: ["permission_id"];
						isOneToOne: false;
						referencedRelation: "up_permissions";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "up_permissions_role_lnk_ifk";
						columns: ["role_id"];
						isOneToOne: false;
						referencedRelation: "up_roles";
						referencedColumns: ["id"];
					},
				];
			};
			up_roles: {
				Row: {
					created_at: string | null;
					created_by_id: number | null;
					description: string | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					name: string | null;
					published_at: string | null;
					type: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					created_at?: string | null;
					created_by_id?: number | null;
					description?: string | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					type?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					created_at?: string | null;
					created_by_id?: number | null;
					description?: string | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					published_at?: string | null;
					type?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "up_roles_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "up_roles_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			up_users: {
				Row: {
					blocked: boolean | null;
					confirmation_token: string | null;
					confirmed: boolean | null;
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					email: string | null;
					id: number;
					locale: string | null;
					password: string | null;
					provider: string | null;
					published_at: string | null;
					reset_password_token: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
					username: string | null;
				};
				Insert: {
					blocked?: boolean | null;
					confirmation_token?: string | null;
					confirmed?: boolean | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					email?: string | null;
					id?: number;
					locale?: string | null;
					password?: string | null;
					provider?: string | null;
					published_at?: string | null;
					reset_password_token?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
					username?: string | null;
				};
				Update: {
					blocked?: boolean | null;
					confirmation_token?: string | null;
					confirmed?: boolean | null;
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					email?: string | null;
					id?: number;
					locale?: string | null;
					password?: string | null;
					provider?: string | null;
					published_at?: string | null;
					reset_password_token?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
					username?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "up_users_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "up_users_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			up_users_role_lnk: {
				Row: {
					id: number;
					role_id: number | null;
					user_id: number | null;
					user_ord: number | null;
				};
				Insert: {
					id?: number;
					role_id?: number | null;
					user_id?: number | null;
					user_ord?: number | null;
				};
				Update: {
					id?: number;
					role_id?: number | null;
					user_id?: number | null;
					user_ord?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "up_users_role_lnk_fk";
						columns: ["user_id"];
						isOneToOne: false;
						referencedRelation: "up_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "up_users_role_lnk_ifk";
						columns: ["role_id"];
						isOneToOne: false;
						referencedRelation: "up_roles";
						referencedColumns: ["id"];
					},
				];
			};
			upload_folders: {
				Row: {
					created_at: string | null;
					created_by_id: number | null;
					document_id: string | null;
					id: number;
					locale: string | null;
					name: string | null;
					path: string | null;
					path_id: number | null;
					published_at: string | null;
					updated_at: string | null;
					updated_by_id: number | null;
				};
				Insert: {
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					path?: string | null;
					path_id?: number | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Update: {
					created_at?: string | null;
					created_by_id?: number | null;
					document_id?: string | null;
					id?: number;
					locale?: string | null;
					name?: string | null;
					path?: string | null;
					path_id?: number | null;
					published_at?: string | null;
					updated_at?: string | null;
					updated_by_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "upload_folders_created_by_id_fk";
						columns: ["created_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "upload_folders_updated_by_id_fk";
						columns: ["updated_by_id"];
						isOneToOne: false;
						referencedRelation: "admin_users";
						referencedColumns: ["id"];
					},
				];
			};
			upload_folders_parent_lnk: {
				Row: {
					folder_id: number | null;
					folder_ord: number | null;
					id: number;
					inv_folder_id: number | null;
				};
				Insert: {
					folder_id?: number | null;
					folder_ord?: number | null;
					id?: number;
					inv_folder_id?: number | null;
				};
				Update: {
					folder_id?: number | null;
					folder_ord?: number | null;
					id?: number;
					inv_folder_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "upload_folders_parent_lnk_fk";
						columns: ["folder_id"];
						isOneToOne: false;
						referencedRelation: "upload_folders";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "upload_folders_parent_lnk_ifk";
						columns: ["inv_folder_id"];
						isOneToOne: false;
						referencedRelation: "upload_folders";
						referencedColumns: ["id"];
					},
				];
			};
			User: {
				Row: {
					createdAt: string | null;
					email: string;
					id: string;
					name: string | null;
				};
				Insert: {
					createdAt?: string | null;
					email: string;
					id?: string;
					name?: string | null;
				};
				Update: {
					createdAt?: string | null;
					email?: string;
					id?: string;
					name?: string | null;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			binary_quantize: {
				Args: { "": string } | { "": unknown };
				Returns: unknown;
			};
			embed_update: {
				Args: { asset_id: number; embed_data: string };
				Returns: string;
			};
			get_assets_by_tag_names: {
				Args: { p_tag_names: string[] };
				Returns: {
					asset_id: number;
					category: string;
					created_at: string;
					description: string;
					document_id: string;
					files: File[];
					properties: Json;
					published_at: string;
					tag_name: string;
					tags: Json;
					updated_at: string;
				}[];
			};
			get_assets_with_relations: {
				Args: Record<PropertyKey, never>;
				Returns: Json;
			};
			get_random_story_ingredients: {
				Args: Record<PropertyKey, never>;
				Returns: {
					description: string;
					document_id: string;
					id: number;
					name: string;
					type: string;
				}[];
			};
			halfvec_avg: {
				Args: { "": number[] };
				Returns: unknown;
			};
			halfvec_out: {
				Args: { "": unknown };
				Returns: unknown;
			};
			halfvec_send: {
				Args: { "": unknown };
				Returns: string;
			};
			halfvec_typmod_in: {
				Args: { "": unknown[] };
				Returns: number;
			};
			hnsw_bit_support: {
				Args: { "": unknown };
				Returns: unknown;
			};
			hnsw_halfvec_support: {
				Args: { "": unknown };
				Returns: unknown;
			};
			hnsw_sparsevec_support: {
				Args: { "": unknown };
				Returns: unknown;
			};
			hnswhandler: {
				Args: { "": unknown };
				Returns: unknown;
			};
			ivfflat_bit_support: {
				Args: { "": unknown };
				Returns: unknown;
			};
			ivfflat_halfvec_support: {
				Args: { "": unknown };
				Returns: unknown;
			};
			ivfflathandler: {
				Args: { "": unknown };
				Returns: unknown;
			};
			l2_norm: {
				Args: { "": unknown } | { "": unknown };
				Returns: number;
			};
			l2_normalize: {
				Args: { "": string } | { "": unknown } | { "": unknown };
				Returns: string;
			};
			search_ambience_by_groups: {
				Args: { query_vector: string };
				Returns: {
					ambience_group: string;
					category: string;
					description: string;
					id: number;
					properties: Json;
					similarity: number;
					tag_name: string;
					tags: Json;
				}[];
			};
			search_drone_musical_only_v2: {
				Args: { query_vector: string };
				Returns: {
					category: string;
					description: string;
					id: number;
					properties: Json;
					similarity: number;
					tag_name: string;
					tags: Json;
				}[];
			};
			search_drone_textural_only_v2: {
				Args: { query_vector: string };
				Returns: {
					category: string;
					description: string;
					id: number;
					properties: Json;
					similarity: number;
					tag_name: string;
					tags: Json;
				}[];
			};
			search_env_room_assets: {
				Args: { query_vector: string };
				Returns: {
					category: string;
					description: string;
					id: number;
					properties: Json;
					similarity: number;
					tag_name: string;
					tags: Json;
				}[];
			};
			search_music_only_v2: {
				Args: { query_vector: string };
				Returns: {
					category: string;
					description: string;
					id: number;
					properties: Json;
					similarity: number;
					tag_name: string;
					tags: Json;
				}[];
			};
			search_sound_sfx_assets: {
				Args: { limit_count?: number; query_vector: string };
				Returns: {
					category: string;
					description: string;
					id: number;
					is_ambience: boolean;
					properties: Json;
					similarity: number;
					tag_name: string;
					tags: Json;
				}[];
			};
			search_text_assets: {
				Args: { limit_count?: number; query_vector: string };
				Returns: {
					category: string;
					description: string;
					id: number;
					properties: Json;
					similarity: number;
					tag_name: string;
					tags: Json;
				}[];
			};
			search_visual_ambience_assets: {
				Args: { limit_count?: number; query_vector: string };
				Returns: {
					category: string;
					description: string;
					has_status: boolean;
					id: number;
					properties: Json;
					similarity: number;
					tag_name: string;
					tags: Json;
				}[];
			};
			search_visual_sfx_assets: {
				Args: { limit_count?: number; query_vector: string };
				Returns: {
					category: string;
					description: string;
					has_status: boolean;
					id: number;
					properties: Json;
					similarity: number;
					tag_name: string;
					tags: Json;
				}[];
			};
			sparsevec_out: {
				Args: { "": unknown };
				Returns: unknown;
			};
			sparsevec_send: {
				Args: { "": unknown };
				Returns: string;
			};
			sparsevec_typmod_in: {
				Args: { "": unknown[] };
				Returns: number;
			};
			vector_avg: {
				Args: { "": number[] };
				Returns: string;
			};
			vector_dims: {
				Args: { "": string } | { "": unknown };
				Returns: number;
			};
			vector_norm: {
				Args: { "": string };
				Returns: number;
			};
			vector_out: {
				Args: { "": string };
				Returns: unknown;
			};
			vector_send: {
				Args: { "": string };
				Returns: string;
			};
			vector_typmod_in: {
				Args: { "": unknown[] };
				Returns: number;
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
	keyof Database,
	"public"
>];

export type Tables<
	DefaultSchemaTableNameOrOptions extends
		| keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
		| { schema: keyof DatabaseWithoutInternals },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
				DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = DefaultSchemaTableNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
			DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
				DefaultSchema["Views"])
		? (DefaultSchema["Tables"] &
				DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	DefaultSchemaTableNameOrOptions extends
		| keyof DefaultSchema["Tables"]
		| { schema: keyof DatabaseWithoutInternals },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = DefaultSchemaTableNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
		? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	DefaultSchemaTableNameOrOptions extends
		| keyof DefaultSchema["Tables"]
		| { schema: keyof DatabaseWithoutInternals },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = DefaultSchemaTableNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
		? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	DefaultSchemaEnumNameOrOptions extends
		| keyof DefaultSchema["Enums"]
		| { schema: keyof DatabaseWithoutInternals },
	EnumName extends DefaultSchemaEnumNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
		: never = never,
> = DefaultSchemaEnumNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
		? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
		: never;

export type CompositeTypes<
	PublicCompositeTypeNameOrOptions extends
		| keyof DefaultSchema["CompositeTypes"]
		| { schema: keyof DatabaseWithoutInternals },
	CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
		: never = never,
> = PublicCompositeTypeNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
	: PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
		? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
		: never;

export const Constants = {
	public: {
		Enums: {},
	},
} as const;

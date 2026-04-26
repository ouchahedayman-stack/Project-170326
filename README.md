# TP 5 : Déployer une API Express

Ce dépôt contient une API Express minimale prête à être déployée (Render, Railway, Fly.io, etc.).

## 1) Installation

```bash
npm install
```

## 2) Lancement en local

```bash
npm start
```

Par défaut, l'API écoute sur `http://localhost:3000` (ou sur la variable `PORT` fournie par la plateforme de déploiement).

## 3) Endpoints disponibles

- `GET /` : message de bienvenue + horodatage
- `GET /health` : endpoint de santé (`{"status":"ok"}`)
- `GET /api/students/:id` : exemple d'endpoint paramétré

## 4) Vérification rapide

```bash
curl http://localhost:3000/health
```

Réponse attendue :

```json
{"status":"ok"}
```

## 5) Déploiement (générique)

1. Pousser ce dépôt sur GitHub.
2. Créer un nouveau service Web sur votre plateforme de déploiement.
3. Paramétrer :
   - **Build command** : `npm install`
   - **Start command** : `npm start`
4. Laisser la plateforme injecter automatiquement `PORT`.
5. Vérifier l'URL publique :
   - `https://votre-url/health`

## 6) Version Node.js

Ce projet cible Node.js `>=20` (déclaré dans `package.json`).

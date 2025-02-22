import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Entity } from '../models';
import { UrlService } from '../shared/services/url.service';

@Injectable({
  providedIn: 'root',
})
export class EntityService {
  private http = inject(HttpClient);
  private urlService = inject(UrlService);

  getEntities() {
    const apiUrl = this.urlService.getEntitiesUrl();
    return this.http.get<Entity[]>(apiUrl);
  }

  createEntity(entity: Entity) {
    const apiUrl = this.urlService.createEntityUrl();
    return this.http.post<Entity>(apiUrl, entity);
  }

  updateEntity(entity: Entity) {
    const apiUrl = this.urlService.updateEntityUrl();
    return this.http.post<Entity>(apiUrl, entity);
  }

  deleteEntity(entityId: number) {
    const apiUrl = this.urlService.deleteEntityUrl();
    return this.http.post<Entity>(apiUrl, { entityId });
  }

  getEntityById(entityId: number) {
    const apiUrl = this.urlService.getEntityByIdUrl(entityId);
    return this.http.get<Entity>(apiUrl);
  }
}
